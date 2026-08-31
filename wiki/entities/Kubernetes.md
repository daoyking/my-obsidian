---
title: Kubernetes
aliases: [Kubernetes, K8s, k8s]
type: entity
tags: [cloud, kubernetes, container, orchestration]
created: 2026-08-31
updated: 2026-08-31
sources: []
status: seed
---

# Kubernetes

## 是什么

Kubernetes（缩写 K8s）是 Google 开源的容器编排平台，用于自动化部署、扩展和管理容器化应用。

## 核心概念

| 概念 | 说明 |
|------|------|
| **Pod** | 最小部署单元，可含一个或多个容器 |
| **Deployment** | 声明式更新管理 Pod 副本 |
| **Service** | 网络抽象，暴露 Pod 访问 |
| **ConfigMap / Secret** | 配置与密钥管理 |
| **Namespace** | 资源隔离 |
| **Ingress** | 外部 HTTP/HTTPS 路由 |

## 在 AI 中的应用

- **模型部署**：KServe / Seldon Core 基于 K8s
- **GPU 调度**：K8s GPU Operator 管理 NVIDIA 显卡
- **向量数据库**：Milvus / Weaviate 云原生部署

## 相关概念

- [[容器]] · [[云原生]] · [[微服务]]
