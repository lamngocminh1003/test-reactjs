import React, { useState, useEffect } from "react";
const Home = () => {
  return (
    <div className="mt-5 pt-2 home">
      <div className="mt-3 mb-3">
        <div className="request">Yêu cầu: </div>
        <div>Sử dụng API từ trang web https://reqres.in/ để tạo website</div>
        <div>
          Sử dụng thư viện React để tạo một màn hình website cơ bản bao gồm các
          chức năng:
        </div>
      </div>
      <div>
        <ul>
          <li>1. Đăng nhập</li>
          <li>2. Thêm User</li>
          <li>3. Sửa User</li>
          <li>4. Xóa User</li>
          <li>5. Hiển thị tất cả User</li>
          <li>6. Tìm kiếm User theo Email</li>
          <li>7. Sắp xếp User theo FirstName</li>
          <li>8. Import User từ file.csv</li>
          <li>9. Export User từ file.csv</li>
        </ul>
      </div>
      <div className="mb-3">
        <div>
          Tự do tùy chỉnh html, css để có một website nhẹ nhàng, khoa học, đẹp
        </div>
        <div>Commit và đẩy source code lên github public</div>
        <div>Triển khai website lên để demo</div>
      </div>
      <div>
        <div>
          <span className="request">Result: </span>
          <span>Thời gian hoàn thành 1-3 ngày</span>
        </div>
        <div>Gửi link Website và Github link</div>
        <div>
          Thời gian phản hồi 2 ngày làm việc kể từ ngày nhận được bài thi
        </div>
      </div>
    </div>
  );
};
export default Home;
