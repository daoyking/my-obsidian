---
title: RDMA
aliases: [Remote Direct Memory Access]
type: concept
tags: [ai, hardware, networking, rdma, meta, nvidia]
created: 2026-08-25
updated: 2026-08-25
sources: ["[[raw/articles/ai-hot-2026-08-25]]"]
status: seed
---

# RDMA

## 定义

Remote Direct Memory Access（远程直接内存访问），一种允许计算机直接访问另一台计算机内存的网络技术，无需 CPU 干预，可实现高吞吐、低延迟的数据传输。

## 核心特性

- **低延迟**：绕过 CPU，直接内存到内存传输
- **高吞吐**：适合大规模 AI 集群的集合通信
- **无 PFC 依赖**：现代 RDMA 协议（如 MetaRoCE）无需 PFC 即可实现无损网络

## AI 场景应用

- **MTIA 300**（Meta，2026-08-25）：集成 12 个 800 Gbps RDMA NIC，1.2 TB/s 总 I/O 带宽
- **MetaRoCE**（Meta，2026-08-25）：专为 AI 工作负载的 RDMA 传输协议，支持乱序交付、多路径、无损容忍
- **NVIDIA NVLink**：类似理念，但为专用互联而非通用以太网

## 相关实体

- [[Meta]] · [[NVIDIA]] · [[AMD]]

## 相关概念

- [[Agent]] · [[Harness工程]] · [[开放权重]]

## 来源

- [[raw/articles/ai-hot-2026-08-25]]（MetaRoCE 开源 + MTIA 300 内置 RDMA NIC）
