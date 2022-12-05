# Đề tài:Tìm hiểu và viết ứng dụng minh họa Cloud9-AWS

## I. Thông tin nhóm 13:
- Nguyễn Văn An 20110434
- Nguyễn Minh Đức 20110461
- Trần Tấn Khoa 20110505

## II. Báo cáo

## A. Giới thiệu

### 1. Cloud9 là gì

`Cloud 9` là một IDE trên môi trường cloud. Với cloud 9, mỗi khi khởi tạo một dự án mới, cloud 9 sẽ cung cấp một không gian làm việc chạy trên máy ảo, máy ảo đó đã được cài đặt sẵn các công cụ lập trình phổ biến như Java, Nodejs, git, DB(MySQL, SQLSever, MongoDB). Lập trình viên chỉ việc ngồi vào và gõ code, sau đó bấm run để chạy, không cần quan tâm gì tới việc cài đặt phần mềm v…v gì cả.

### 2. Chức năng của Cloud9

### 2.1 Trình chỉnh sửa đầy đủ tính năng

`AWS Cloud9` bao gồm một trình chỉnh sửa dựa trên trình duyệt giúp bạn dễ dàng viết, chạy và gỡ lỗi các dự án của mình. Khi bạn nhập, các đề xuất hoàn thành mã và gợi ý mã sẽ xuất hiện trong trình chỉnh sửa, giúp bạn viết mã nhanh hơn và tránh lỗi. Việc hoàn thành mã không chỉ dựa trên các số nhận dạng trong tệp của bạn mà còn dựa trên các thư viện tiêu chuẩn. Trình chỉnh sửa cũng cho phép bạn tùy chỉnh hoàn toàn chế độ xem của mình. Bạn có thể điều chỉnh bảng điều khiển của mình theo bất kỳ hướng nào bằng một thao tác kéo và thả đơn giản.

<img src="./frontend/public/assets/images/Screenshots_tulip_03_1x.8dd9da76bd4975e09f640b73d4fecb9848c03031.png" alt="aws" />

### 2.2 Lựa chọn rộng rãi các cấu hình thực thi

`AWS Cloud9` hỗ trợ hơn 40 ngôn ngữ lập trình và loại ứng dụng bao gồm JavaScript, Python, PHP, Ruby, Go và C ++. Với Cloud9, bạn có thể chọn từ các cấu hình chạy mặc định hoặc xác định cấu hình tùy chỉnh bằng cách chỉ định các biến môi trường, tên tệp, tùy chọn dòng lệnh, v.v.
<img src="./frontend/public/assets/images/Screenshots_tulip_03_1x.8dd9da76bd4975e09f640b73d4fecb9848c03032.png" alt="aws" />

### 2.3 Trình gỡ lỗi tích hợp

`AWS Cloud9` đi kèm với một trình gỡ lỗi tích hợp, cung cấp các khả năng thường được sử dụng như thiết lập các điểm ngắt, chuyển qua mã và kiểm tra các biến của bất kỳ ứng dụng PHP, Python, JS / Node.js, C / C ++ nào.
<img src="./frontend/public/assets/images/Screenshots_tulip_03_1x.8dd9da76bd4975e09f640b73d4fecb9848c03033.png" alt="aws" />

### 2.4 Thiết bị đầu cuối tích hợp

`AWS Cloud9` cung cấp một thiết bị đầu cuối có đầy đủ các đặc quyền sudo cho phiên bản Amazon EC2 được quản lý của bạn. Nó cho phép bạn chạy các lệnh, chẳng hạn như đẩy các thay đổi mã sang git, biên dịch mã của bạn hoặc hiển thị đầu ra lệnh từ máy chủ của bạn. Giao diện dòng lệnh AWS đã được xác thực trước được cài đặt trong thiết bị đầu cuối của bạn, cho phép bạn dễ dàng kiểm soát và tương tác với các dịch vụ AWS trực tiếp từ dòng lệnh.

### 2.5 Chỉnh sửa cộng tác và trò chuyện

`AWS Cloud9` cho phép bạn chia sẻ môi trường phát triển với nhóm của mình. Điều này giúp nhiều nhà phát triển trong nhóm của bạn chủ động thấy nhau nhập và ghép nối chương trình với nhau trên cùng một tệp. Cloud9 cho phép bạn sử dụng khả năng trò chuyện tích hợp để giao tiếp với nhóm của mình mà không cần phải rời khỏi IDE.

### 2.6 Công cụ tích hợp trên cùng browser

`AWS Cloud9` tích hợp với `AWS CodeStar`, cho phép bạn nhanh chóng thiết lập chuỗi công cụ phân phối liên tục đầu cuối cho ứng dụng của mình và bắt đầu phát hành mã nhanh hơn trên AWS. CodeStar cung cấp trải nghiệm thống nhất cho phép bạn dễ dàng xây dựng, kiểm tra và triển khai các ứng dụng cho AWS với sự trợ giúp của `AWS CodeCommit, AWS CodeBuild, AWS CodePipeline và AWS CodeDeploy`. Trong một vài cú nhấp chuột, bạn sẽ có thể kết nối môi trường phát triển Cloud9 của mình với một chuỗi công cụ phân phối liên tục.
<img src="./frontend/public/assets/images/Screenshots_tulip_03_1x.8dd9da76bd4975e09f640b73d4fecb9848c03036.png" alt="aws" />

### 2.7 Lịch sử sửa đổi tệp

`AWS Cloud9` lưu giữ lịch sử sửa đổi của các tệp trong môi trường phát triển của bạn. Điều này cho phép bạn nhanh chóng truy cập các thay đổi mã đã được thực hiện trong quá khứ và hoàn nguyên về lần lặp trước đó.
<img src="./frontend/public/assets/images/Screenshots_tulip_03_1x.8dd9da76bd4975e09f640b73d4fecb9848c03037.png" alt="aws" />

### 2.8 Các phím tắt bàn phím

Ngoài các liên kết khóa mặc định, `AWS Cloud9` cung cấp lựa chọn sử dụng liên kết khóa VIM, Emacs và Sublime, cũng như xác định các ràng buộc tùy chỉnh của riêng bạn. Điều này cho phép bạn sử dụng các lệnh và phím tắt tương tự mà bạn đã quen thuộc.
<img src="./frontend/public/assets/images/Screenshots_tulip_03_1x.8dd9da76bd4975e09f640b73d4fecb9848c03038.png" alt="aws" />

### 2.9 Trình chỉnh sửa hình ảnh tích hợp

`AWS Cloud9` hỗ trợ khả năng chỉnh sửa hình ảnh, cho phép bạn thay đổi kích thước, cắt, xoay hoặc lật hình ảnh ngay từ trình duyệt.
<img src="./frontend/public/assets/images/Screenshots_tulip_03_1x.8dd9da76bd4975e09f640b73d4fecb9848c03039.png" alt="aws" />

## B. Cài Đặt và Demo ứng dụng
