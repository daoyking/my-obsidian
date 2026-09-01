# Mac/iPhone 免费 App 推荐 — 2026-08-31

> 存放 Agent：automation-1786437213877
> 主题：macOS 效率神器 — 窗口管理、菜单栏整理与 iPhone AI Agent

---

## 1. AeroSpace — i3 风格平铺窗口管理器

| 项目 | 详情 |
|------|------|
| GitHub | nikitabobko/AeroSpace |
| Stars | ~22,600+（今日 +33） |
| 语言 | Swift |
| 许可证 | MIT |
| 最后更新 | 2026-08-11 |
| 安装 | `brew install --cask nikitabobko/tap/aerospace` |

**一句话**：macOS 上的 i3 平铺窗口管理器，键盘驱动，无需禁用 SIP。

**核心价值**：
- 采用 i3/Sway 的树形平铺布局，自动排列窗口，最大化屏幕空间
- 完全不需要禁用 macOS 的 SIP（System Integrity Protection），安全可控
- 纯文本 TOML 配置文件，支持 dotfiles 版本管理
- 虚拟工作区切换无动画延迟，多显示器友好
- 适合从 Linux i3/Sway 迁移过来的开发者

**适用人群**：追求键盘驱动工作流的开发者、多显示器用户、i3 迁移者。

**注意**：仍处于 Public Beta 阶段，1.0 前可能有 breaking changes；未 notarize，Homebrew cask 会自动处理。

---

## 2. Ice — macOS 菜单栏管理神器

| 项目 | 详情 |
|------|------|
| GitHub | jordanbaird/Ice |
| Stars | ~26,000+ |
| 语言 | Swift |
| 许可证 | MIT |
| 最后更新 | 2026-07-26（稳定版），2026-09（beta） |
| 安装 | `brew install --cask jordanbaird-ice` |

**一句话**：MacBook 刘海屏用户的菜单栏整理必备工具，免费开源，Bartender 的平替首选。

**核心价值**：
- 三区管理：始终显示 / 隐藏 / 始终隐藏，拖拽即可配置
- 鼠标悬停、点击空白处、双指滑动菜单栏均可临时展开隐藏图标
- Ice Bar 模式：在主菜单栏下方生成浮动栏，完美适配刘海 Mac
- 支持菜单栏外观自定义：着色、阴影、圆角、渐变
- 搜索功能：图标多时快速定位
- 替换 Bartender 的最佳选择（Bartender 2024 年换 owner 后引发隐私争议）

**适用人群**：菜单栏图标混乱的 Mac 用户、刘海屏 MacBook 用户。

**注意**：需要 macOS 14+，不适用于更老版本。

---

## 3. AltTab — Windows 风格窗口切换器

| 项目 | 详情 |
|------|------|
| GitHub | lwouis/alt-tab-macos |
| Stars | ~15,000+ |
| 语言 | Swift |
| 许可证 | GPL-3.0 |
| 最后更新 | 2026-07-09（v11.4.3） |
| 安装 | `brew install --cask alt-tab` |

**一句话**：把 Windows 高效的 Alt+Tab 窗口切换体验原汁原味地带到 macOS 上。

**核心价值**：
- 系统 Cmd+Tab 只能切换应用，不能切换同应用的多个窗口；AltTab 按窗口预览切换
- 实时缩略图预览，一眼看到每个窗口内容
- 支持直接在切换界面关闭/最小化窗口，无需切进窗口
- 完全自定义快捷键、排序方式、缩略图样式
- 100% 开源免费，无广告，无订阅

**适用人群**：Windows 转 macOS 用户、多窗口切换频繁的开发者和内容创作者。

---

## 4. Maccy — 剪贴板历史管理器

| 项目 | 详情 |
|------|------|
| GitHub | p0deje/Maccy |
| Stars | ~18,600+ |
| 语言 | Swift |
| 许可证 | MIT |
| 最后更新 | 2026-08-10（v2.7.1） |
| 安装 | `brew install maccy` |

**一句话**：轻量的 macOS 剪贴板管理器，键盘优先，隐私本地存储。

**核心价值**：
- Shift+Cmd+C 呼出搜索面板，输入关键词瞬间找回历史剪贴内容
- 支持文字、图片、文件历史， fuzzy search 智能匹配
- 可固定常用条目，防止被新内容顶掉
- 自动过滤密码管理器（1Password 等）生成的剪贴内容，保护隐私
- 仅本地存储，数据不出设备
- 原生 Swift 构建，内存占用极低

**适用人群**：每天频繁复制粘贴的代码开发者、文字工作者。

---

## 5. Loop — 优雅的径向菜单窗口管理

| 项目 | 详情 |
|------|------|
| GitHub | MrKai77/Loop |
| Stars | ~11,000+ |
| 语言 | Swift |
| 许可证 | GPL-3.0 |
| 最后更新 | 2026-05-15 |
| 安装 | `brew install loop` |

**一句话**：按住按键 + 移动鼠标方向，径向菜单控制窗口位置，交互优雅。

**核心价值**：
- 径向菜单（Radial Menu）：按住触发键，向不同方向移动鼠标即可移动/缩放窗口
- 预览模式：提交前先看效果，所见即所得
- 支持 Cycle 模式：连续按同一快捷键循环执行不同操作
- Stash 功能：把窗口隐藏到屏幕边缘，悬停即可唤出
- 高度可定制：颜色、形状、触发键均可自定义
- 支持 AppleScript / URL Scheme 远程控制

**适用人群**：喜欢鼠标 + 快捷键混合操作、追求优雅交互体验的用户。

---

## 6. PhoneClaw — iPhone 离线 AI Agent

| 项目 | 详情 |
|------|------|
| GitHub | kellyvv/PhoneClaw |
| Stars | ~2,500+（持续活跃） |
| 语言 | Swift |
| 许可证 | Apache 2.0 |
| 最后更新 | 2026-08（活跃开发中） |
| 安装 | Sideloadly 签名安装（免费 Apple ID 即可） |

**一句话**：完全离线运行的 iPhone 本地 AI Agent，基于 Gemma 4 端侧推理，隐私绝对安全。

**核心价值**：
- 全离线本地推理，不上传任何数据，聊天记录、图片、健康数据均在设备本地处理
- 基于 Gemma 4 LiteRT-LM 端侧大模型，支持 GPU/CPU 双推理引擎切换
- 多模态交互：文本对话、图片理解、实时摄像头视觉解析
- 可扩展 Skill 系统：SKILL.md 文件管理，无需重新编译即可添加新能力
- iOS 系统深度集成：日历、通讯录、剪贴板、HealthKit 健康数据、HomeKit
- LIVE 实时流式语音交互，支持随时打断对话
- 支持中英双语，配置简单

**适用人群**：隐私优先用户、需要离线 AI 助手的专业人士、技术极客。

**注意**：需通过 Sideloadly 签名安装（免费 Apple ID 有效期 7 天需重新签名）；iOS 17+，推荐 iPhone 15 Pro 及以上。

---

## 7. OpenMinis — 跨平台 AI Agent，手机里的 Linux 沙箱

| 项目 | 详情 |
|------|------|
| GitHub | OpenMinis/OpenMinis |
| Stars | ~4,000+（30 天 +1,200 增长） |
| 语言 | Swift + Kotlin |
| 许可证 | GPL-3.0 |
| 最后更新 | 2026-08-18（活跃开发中） |
| 安装 | iOS: TestFlight Beta；Android: GitHub Releases |

**一句话**：把 Claude/GPT/Gemini 装进手机，再配一台 Alpine Linux 沙箱，让 AI Agent 真正能干活。

**核心价值**：
- 设备端 Linux 沙箱：iOS 用 iSH（ARM64 Fork），Android 用 PRoot，无需 root/jailbreak
- 支持主流 LLM：Claude、GPT、Gemini、OpenRouter、DeepSeek、通义千问、Kimi 等
- 真正的本地执行：Agent 可在沙箱内装包、跑脚本、处理文件（Python/Node.js/Go/Rust）
- 深度系统集成：HealthKit、日历、提醒事项、通讯录、HomeKit、蓝牙、剪贴板、闹钟
- Browser 自动化：Agent 可浏览网页、填写表单、截图
- Skills + MCP 支持：SKILL.md 文件化技能系统，兼容 Claude/Codex/OpenClaw 生态
- 多工作区隔离：minis://workspace/ 链接快速切换独立上下文

**适用人群**：需要移动端 AI Agent 的开发者、隐私优先用户、极客玩家。

**社区评价**：
- "the most impressive indie app I've seen in a while" — Federico Viticci, MacStories
- "可能是 iOS 端最强 AI Agent" — Appinn 小众软件
- "在很大程度上实现甚至局部超越了 Apple Intelligence" — 知乎

**注意**：iOS 通过 TestFlight 分发，需手动加入 Beta 计划；Android APK 在 GitHub Releases。

---

## 对比总结

| App | 平台 | 类型 | Stars | 许可证 | 核心价值 |
|-----|------|------|-------|--------|----------|
| AeroSpace | macOS | 窗口管理器 | ~22.6k | MIT | i3 风格平铺，键盘驱动，免 SIP |
| Ice | macOS | 菜单栏管理 | ~26k | MIT | 三区管理，刘海屏适配，Bartender 平替 |
| AltTab | macOS | 窗口切换 | ~15k | GPL-3.0 | Windows Alt+Tab 体验，窗口级预览 |
| Maccy | macOS | 剪贴板管理 | ~18.6k | MIT | 键盘优先，本地隐私，轻量高效 |
| Loop | macOS | 窗口管理 | ~11k | GPL-3.0 | 径向菜单交互，所见即所得 |
| PhoneClaw | iPhone | 离线 AI Agent | ~2.5k | Apache 2.0 | 全离线本地推理，隐私绝对安全 |
| OpenMinis | iOS/Android | AI Agent | ~4k | GPL-3.0 | 手机 Linux 沙箱，多模型支持 |

---

## 安装速查

```bash
# Mac 端（均通过 Homebrew）
brew install --cask nikitabobko/tap/aerospace  # AeroSpace
brew install --cask jordanbaird-ice            # Ice
brew install --cask alt-tab                    # AltTab
brew install maccy                             # Maccy
brew install loop                              # Loop

# iPhone 端
# PhoneClaw：https://github.com/kellyvv/PhoneClaw（Sideloadly 签名安装）
# OpenMinis：https://testflight.apple.com/join/...（TestFlight Beta）
```

---

> 本次推荐由 automation-1786437213877 自动生成，所有 App 均满足：免费开源 / 长期活跃维护 / 提升效率或有趣。
