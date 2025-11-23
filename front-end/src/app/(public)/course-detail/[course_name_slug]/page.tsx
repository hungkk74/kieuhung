"use client";

import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";
import { Course } from "@/types/courseType";

interface CourseDetail {
  course: Course;
  id: number;
  content: string;
  request: string;
  description: string;
  course_include: string;
}

const CourseDetailPage = () => {
  const { get } = useApi();
  const [data, setData] = useState<CourseDetail | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await get("/course-detail/1");
        setData(res);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [get]);

  if (!data) return <div>Loading...</div>;

  const { course, content, request, description, course_include } = data;

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-black text-white py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {course.title}
          </h1>
          <p className="text-lg md:text-xl mb-2">{course.description}</p>
          <p>Bán chạy nhất: {course.level}</p>
          <p>{course.quantity} học viên</p>
          <p className="text-sm text-gray-300 mb-2">
            Giảng viên: {course.teacher_name} | Lĩnh vực: {course.category_name}
          </p>

          {/* <p className="text-2xl md:text-3xl font-semibold">₫{course.price}</p> */}
          <span>Lần cập nhật gần nhất: {course.update_at}</span>
        </div>
      </div>

      {/* Right sidebar */}
      <div className="bg-[#fff] space-y-4 p-6 border-5 border-gray-200 rounded-lg shadow-md md:absolute md:top-20 md:right-80 md:min-h-[80vh] ">
        <div className="border-1 h-[200px]">Img</div>
        <p className="text-2xl font-bold">₫{course.price}</p>
        <button className="w-full bg-[#ec5252] hover:bg-red-600 text-white py-3 px-4 rounded font-semibold transition-all duration-200">
          Thêm vào giỏ hàng
        </button>
        <button className="w-full border border-gray-300 hover:bg-gray-100 text-gray-800 py-3 px-4 rounded font-semibold transition-all duration-200">
          Mua ngay
        </button>
        <p className="text-sm text-center">Đảm bảo hoàn tiền trong 30 ngày</p>

        <div className="mt-4 text-sm text-gray-500 space-y-1 mt-10">
          <p>Số lượng học viên: {course.quantity}</p>
          <p>Level: {["Cơ bản", "Trung bình", "Nâng cao"][course.level - 1]}</p>

          {/* Course includes */}
          <section>
            <h2 className="text-xl font-bold mb-3">Khóa học bao gồm:</h2>
            <ul className="list-disc list-inside text-gray-700 whitespace-pre-line leading-relaxed">
              {course_include}
            </ul>
          </section>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-0 py-10 grid md:grid-cols-3 gap-10">
        {/* Left content */}
        <div className="md:col-span-2 space-y-8">
          {/* Nội dung khóa học */}
          <section className="border p-5">
            <h2 className="text-2xl font-bold mb-3">Nội dung khóa học</h2>
            <div className="text-gray-700 leading-relaxed">{content}</div>
          </section>

          {/* Mục tiêu */}
          <section>
            <h2 className="text-2xl font-bold mb-3">Bạn sẽ học được gì</h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </section>

          {/* Yêu cầu */}
          <section>
            <h2 className="text-2xl font-bold mb-3">Yêu cầu</h2>
            <p className="text-gray-700 leading-relaxed">{request}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
