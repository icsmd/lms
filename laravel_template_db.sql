-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 07, 2024 at 03:25 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_template_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\UserAccountModel', 1, 'API Token', '6a71950ade62d96548ce7f08b3991304d3812fa8ff726cad7bf111a7d7d29efb', '[\"*\"]', NULL, '2024-11-07 04:55:11', '2024-11-07 01:55:11', '2024-11-07 01:55:11'),
(2, 'App\\Models\\UserAccountModel', 1, 'API Token', 'f966aab8256621f6d401ecf81f9de25edcf5e8041a8f0d6bc0be7ef0047d492d', '[\"*\"]', NULL, '2024-11-07 04:56:36', '2024-11-07 01:56:36', '2024-11-07 01:56:36'),
(3, 'App\\Models\\UserAccountModel', 1, 'API Token', '7edeb6fa4d8c206c885a309bfa20d23ac0434caa01f70dd739a348f53024bf3a', '[\"*\"]', NULL, '2024-11-07 05:06:53', '2024-11-07 02:06:53', '2024-11-07 02:06:53'),
(4, 'App\\Models\\UserAccountModel', 1, 'API Token', '1a579dbe34c52a922a7892e68ca61b6d3bda02708cb7b87e08929f8b79b76db5', '[\"*\"]', NULL, '2024-11-07 05:12:55', '2024-11-07 02:12:55', '2024-11-07 02:12:55'),
(5, 'App\\Models\\UserAccountModel', 1, 'API Token', '12d48c9d4803e28b805550f62715b38528683271d28823fcbda7a150f2b73b1f', '[\"*\"]', NULL, '2024-11-07 05:14:34', '2024-11-07 02:14:34', '2024-11-07 02:14:34');

-- --------------------------------------------------------

--
-- Table structure for table `t_user_account`
--

CREATE TABLE `t_user_account` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `employee_id` text DEFAULT NULL,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `username` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `user_type` enum('sysa') NOT NULL,
  `status` enum('active','deactivated') NOT NULL DEFAULT 'active',
  `first_login` tinyint(1) NOT NULL DEFAULT 1,
  `login_attempt` int(11) NOT NULL DEFAULT 0,
  `date_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `date_modified` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `t_user_account`
--

INSERT INTO `t_user_account` (`user_id`, `employee_id`, `firstname`, `lastname`, `username`, `password`, `user_type`, `status`, `first_login`, `login_attempt`, `date_created`, `date_modified`) VALUES
(1, '2024-02-001', 'apol', 'ongkit', 'apol', 'eyJpdiI6ImRLZjJYVmlYVThhTmV0V1UxZWxHelE9PSIsInZhbHVlIjoiWTd2RENrR0t0TnVLemtLeXM2MG1PQT09IiwibWFjIjoiZDc0ODRmMjZiYmFlYjU0OTgwOWJlMzEyOTU4MzczNjQ2NGQxZmFlMGZjZDQ3MDBiMjljZTU2ZTUwNzBhMmFkNSIsInRhZyI6IiJ9', 'sysa', 'active', 1, 0, '2024-11-07 01:54:01', '2024-11-07 02:14:34');

-- --------------------------------------------------------

--
-- Table structure for table `t_user_log`
--

CREATE TABLE `t_user_log` (
  `log_no` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `t_user_log`
--

INSERT INTO `t_user_log` (`log_no`, `user_id`, `date_created`) VALUES
(1, 1, '2024-11-07 01:56:36'),
(2, 1, '2024-11-07 02:06:54'),
(3, 1, '2024-11-07 02:12:55'),
(4, 1, '2024-11-07 02:14:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `t_user_account`
--
ALTER TABLE `t_user_account`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `t_user_log`
--
ALTER TABLE `t_user_log`
  ADD PRIMARY KEY (`log_no`),
  ADD KEY `fk_log_user_account_user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `t_user_account`
--
ALTER TABLE `t_user_account`
  MODIFY `user_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `t_user_log`
--
ALTER TABLE `t_user_log`
  MODIFY `log_no` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
