"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import DialogCustom from "@/components/common/dialog-custom";
import FormDialog from "@/components/common/dialog-form";
import { toast } from "sonner";

import { useAppSelector } from "@/redux/hooks";
import { useApi } from "@/hooks/useApi";

interface LessonsCourseProps {
  onReload: () => void;
  lessons: any[];
  openLessonIds: number[];
  selectedSubLessonId: number | null;
  onToggleLesson: (lessonId: number) => void;
  onSelectSubLesson: (lessonId: number, subLessonId: number) => void;
}

const LessonsCourse = ({
  onReload,
  lessons,
  selectedSubLessonId,
  openLessonIds,
  onToggleLesson,
  onSelectSubLesson,
}: LessonsCourseProps) => {
  const { remove } = useApi();

  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: "",
    description: "",
    action: "",
  });

  const { token, user } = useAppSelector((state) => state.auth);
  const [selectedSubLesson, setSelectedSubLesson] = useState<any>(null);

  const handleActionClick = (action: string, sub: any, lessonId: number) => {
    // Gắn lessonId vào sub (nếu chưa có)
    // console.log(lessonId);
    setSelectedSubLesson({ ...sub, lesson_id: lessonId });

    if (["addBefore", "addAfter", "update"].includes(action)) {
      setDialogContent({
        title:
          action === "addBefore"
            ? "Thêm bài học phía trước"
            : action === "addAfter"
            ? "Thêm bài học phía sau"
            : "Cập nhật bài học",
        description: "",
        action,
      });
      setFormDialogOpen(true);
      return;
    }

    // Xóa thì mới dùng dialog xác nhận
    if (action === "delete") {
      setDialogContent({
        title: "Xoá bài học",
        description: `Hành động này không thể hoàn tác. Xoá "${sub.title}"?`,
        action,
      });
      setConfirmDialogOpen(true);
    }
  };

  // Chỉ xoá
  const handleConfirm = async () => {
    try {
      const res = await remove(`sublesson/${selectedSubLessonId}`);
      toast.success(res.message || "Xoá bài học thành công");
      setConfirmDialogOpen(false);
      onReload();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  // Submit
  const handleFormSubmit = async (data: any) => {
    try {
      let url = "";
      let method = "POST";

      if (dialogContent.action === "update") {
        // API cập nhật sublesson
        url = `${process.env.NEXT_PUBLIC_API_URL}/sublesson/update/${selectedSubLesson?.id}`;
        method = "PUT";
      } else if (
        dialogContent.action === "addBefore" ||
        dialogContent.action === "addAfter"
      ) {
        // API thêm bài học tương đối
        const insertAfter = dialogContent.action === "addAfter";
        // console.log(selectedSubLesson);

        const lessonId = selectedSubLesson?.lesson_id;

        url = `${process.env.NEXT_PUBLIC_API_URL}/lesson/${lessonId}/sublesson/add-relative?referenceSubLessonId=${selectedSubLesson?.id}&insertAfter=${insertAfter}`;
        method = "POST";
      }

      // console.log(url);
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: data.title,
          video_url: data.video_url,
        }),
      });

      if (!res.ok) throw new Error("Thao tác thất bại");
      const result = await res.json();

      // Hiển thị thông báo phù hợp
      if (dialogContent.action === "update") toast.success(result.message);
      else toast.success(result.message || "Thêm bài học thành công!");

      // Có thể gọi lại API load lại danh sách bài học nếu cần
      setFormDialogOpen(false);
      onReload();
    } catch (error: any) {
      toast.error(error.message || "Đã xảy ra lỗi");
    }
  };

  return (
    <>
      <h2 className="text-lg font-semibold border-b px-4 pb-4">
        Nội dung khoá học
      </h2>

      {lessons.map((lesson) => {
        const isOpen = openLessonIds.includes(lesson.id);

        return (
          <div key={lesson.id} className="border-b py-3 px-3">
            <div
              onClick={() => onToggleLesson(lesson.id)}
              className="hover:bg-[#f2f2f2] cursor-pointer"
            >
              <div className="flex justify-between">
                <h3
                  className={`font-semibold ${isOpen ? "text-blue-600" : ""}`}
                >
                  Phần {lesson.order_index}: {lesson.title}
                </h3>
                <span>{isOpen ? "▲" : "▼"}</span>
              </div>
            </div>

            {isOpen && lesson.sub_lessons && (
              <ul className="mt-2 space-y-1">
                {lesson.sub_lessons.map((sub: any) => (
                  <li
                    key={sub.id}
                    onClick={() => onSelectSubLesson(lesson.id, sub.id)}
                    className={`flex justify-between items-center px-3 py-1 rounded-md cursor-pointer ${
                      selectedSubLessonId === sub.id
                        ? "bg-blue-100 text-blue-600 font-medium"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div>▶</div>
                      <div>
                        <h2>{sub.title}</h2>
                        <p className="text-sm text-[#594848]">
                          {sub.duration} phút
                        </p>
                      </div>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <EllipsisVertical />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() =>
                            handleActionClick("addBefore", sub, lesson.id)
                          }
                        >
                          Thêm bài học phía trước
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleActionClick("addAfter", sub, lesson.id)
                          }
                        >
                          Thêm bài học phía sau
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleActionClick("update", sub, lesson.id)
                          }
                        >
                          Cập nhật bài học
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleActionClick("delete", sub, lesson.id)
                          }
                        >
                          Xoá bài học
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}

      <div
        className={`text-center p-4 ${
          user?.role === "STUDENT" ? "hidden" : ""
        }`}
      >
        <Button>Thêm bài học</Button>
      </div>

      {/* Dialog xác nhận */}
      <DialogCustom
        open={confirmDialogOpen}
        onOpenChange={setConfirmDialogOpen}
        title={dialogContent.title}
        description={dialogContent.description}
        onConfirm={handleConfirm}
      />

      {/* Dialog form thêm bài, cập nhật*/}
      <FormDialog
        open={formDialogOpen}
        onOpenChange={setFormDialogOpen}
        title={dialogContent.title}
        onSubmit={handleFormSubmit}
        sublessonId={selectedSubLesson?.id}
      />
    </>
  );
};

export default LessonsCourse;
