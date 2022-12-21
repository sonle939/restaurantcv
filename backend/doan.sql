-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 10, 2022 lúc 07:07 AM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `doan`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bookingtable`
--

CREATE TABLE `bookingtable` (
  `id` int(11) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `mobile` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL,
  `amountpp` int(10) NOT NULL,
  `note` varchar(50) NOT NULL,
  `userid` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `categoryid` int(11) NOT NULL,
  `categoryname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`categoryid`, `categoryname`) VALUES
(1, 'Lẩu'),
(2, 'Nướng'),
(3, 'Hải sản'),
(7, 'Đồ uống');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `evaluate`
--

CREATE TABLE `evaluate` (
  `id` int(11) NOT NULL,
  `userid` int(10) DEFAULT NULL,
  `productid` int(10) DEFAULT NULL,
  `content` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `manageorder`
--

CREATE TABLE `manageorder` (
  `id` int(10) NOT NULL,
  `productid` int(10) DEFAULT NULL,
  `userid` int(10) DEFAULT NULL,
  `ordername` varchar(50) NOT NULL,
  `addressorder` varchar(50) NOT NULL,
  `amount` int(10) NOT NULL,
  `price` int(10) NOT NULL,
  `image` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL,
  `proname` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `price` int(20) NOT NULL,
  `amount` int(20) NOT NULL,
  `image` varchar(100) NOT NULL,
  `categoryid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `proname`, `description`, `price`, `amount`, `image`, `categoryid`) VALUES
(1, 'lẩu gà', 'món mới1', 111111, 12, 'https://i.pinimg.com/564x/c5/33/e0/c533e08182394be8264c879498af127c.jpg', 1),
(11, 'lẩu cá', 'ngon', 8000000, 12, 'https://i.pinimg.com/564x/71/b1/a0/71b1a0ee56683c9ec67605a4be4ada62.jpg', 1),
(15, 'Cocacola', 'loại mới', 10000, 200, 'https://i.pinimg.com/564x/ae/2d/65/ae2d65d73a98f127fdc0b320b2482c8b.jpg', 7),
(16, 'Pepsi', 'loai dac biet', 15000, 200, 'https://i.pinimg.com/564x/a8/ba/4a/a8ba4ac3be76f601bc80c923e93dfa4b.jpg', 7);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `mobile` int(20) NOT NULL,
  `rank` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `fullname`, `email`, `password`, `address`, `mobile`, `rank`) VALUES
(1, 'Le Xuan Son', 'sonhq28@gmail.com', '123456', 'Thanh Hoa', 395959001, 'admin'),
(4, 'nguyen thi hue', 'hue1412@gmail.com', '141220', 'Ha Noi', 265662651, 'staff'),
(5, 'Vu Huu Thang', 'Thang@gmail.com', '010101', 'QUang Ninh', 2147483647, 'user'),
(8, 'Vu Thi Ngoc bich', 'bich@gmail.com', '121212', 'Thai Binh', 645648656, 'Admin'),
(9, 'Nguyen Thanh Ngan', 'ngan@gmail.com', '010101', 'Dan Phuong', 55165165, 'user'),
(10, 'Tran Duc Tuan', 'tuan@gmail.com', 'tuanly', 'Hoang Mai', 2147483647, 'staff'),
(11, 'Nguyen Thi Nga', 'nga@gmail.com', '454545', 'Lao Phu', 65165165, 'user'),
(12, 'Lê Nguyễn Minh Tâm', 'contraiboson@gmail.com', 'tamthang', 'Hưng Yên', 65651651, 'staff');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `bookingtable`
--
ALTER TABLE `bookingtable`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userid` (`userid`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`categoryid`);

--
-- Chỉ mục cho bảng `evaluate`
--
ALTER TABLE `evaluate`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userid` (`userid`);

--
-- Chỉ mục cho bảng `manageorder`
--
ALTER TABLE `manageorder`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userid` (`userid`),
  ADD KEY `fk_order` (`productid`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryid` (`categoryid`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `bookingtable`
--
ALTER TABLE `bookingtable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `categoryid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `evaluate`
--
ALTER TABLE `evaluate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `manageorder`
--
ALTER TABLE `manageorder`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `bookingtable`
--
ALTER TABLE `bookingtable`
  ADD CONSTRAINT `bookingtable_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `evaluate`
--
ALTER TABLE `evaluate`
  ADD CONSTRAINT `evaluate_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `manageorder`
--
ALTER TABLE `manageorder`
  ADD CONSTRAINT `fk_order` FOREIGN KEY (`productid`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `manageorder_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`categoryid`) REFERENCES `category` (`categoryid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
