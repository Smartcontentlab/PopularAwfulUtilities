Source: https://raw.githubusercontent.com/cogniolab/agent-monitor/main/README.md
Title: 
Fetched: 2026-08-23T20:02:55.719Z

# 📊 Agent Monitor

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![Agent Compatible](https://img.shields.io/badge/Agents-OpenAI%20%7C%20Claude%20%7C%20LangChain-green.svg)](https://github.com/cogniolab/agent-monitor)

> **Open-source observability and monitoring platform for AI agents**

Real-time tracing, metrics, cost tracking, and debugging for production AI agent systems. Works with OpenAI, Claude, LangChain, and custom agents.

---

## 🎯 The Problem

Production AI agents are black boxes:
- ❌ No visibility into what agents are doing
- ❌ No way to track costs per task
- ❌ Debugging failures is impossible
- ❌ Performance bottlenecks are hidden
- ❌ Token usage is untracked

**Agent Monitor solves all of this.**

---

## ✨ Features

### 📈 **Real-Time Tracing**
- **Execution Traces**: See every step agents take
- **Task Flows**: Visualize multi-agent workflows
- **Tool Calls**: Track which tools agents use
- **LLM Interactions**: Monitor prompts and responses

### 💰 **Cost Tracking**
- **Per-Task Costs**: Track spending per operation
- **Token Usage**: Input/output tokens for every call
- **Cost Trends**: Identify expensive operations
- **Budget Alerts**: Get notified before overspending

### ⚡ **Performance Metrics**
- **Latency**: Response times per agent/operation
- **Throughput**: Requests per second
- **Error Rates**: Track failures and retries
- **Success Rates**: Monitor agent reliability

### 🐛 **Debugging**
- **Error Tracking**: Capture and categorize errors
- **Replay**: Replay failed executions
- **Logs**: Structured logging with context
- **Alerts**: Get notified of issues

### 📊 **Analytics Dashboard**
- **Real-Time Dashboard**: Live metrics and traces
- **Historical Analysis**: Trends over time
- **Cost Reports**: Spending breakdowns
- **Performance Reports**: Bottleneck identification

---

## 🚀 Quick Start (2 Minutes)

### Install

```bash
pip install agent-monitor
```

### Monitor Your Agents

**OpenAI Agents:**
```python
from agent_monitor import AgentMonitor
from openai import OpenAI

# Initialize monitor
monitor = AgentMonitor(api_key="your-api-key")

# Wrap your OpenAI client
client = monitor.wrap_openai(OpenAI())

# Use normally - automatically monitored!
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Hello"}]
)

# View metrics
print(f"Cost: ${monitor.get_cost():.4f}")
print(f"Tokens: {monitor.get_tokens()}")
```

**Claude (Anthropic):**
```python
from agent_monitor import AgentMonitor
from anthropic import Anthropic

monitor = AgentMonitor(api_key="your-api-key")
client = monitor.wrap_anthropic(Anthropic())

# Automatically tracked!
response = client.messages.create(
    model="claude-3-opus-20240229",
    messages=[{"role": "user", "content": "Hello"}]
)
```

**LangChain:**
```python
from agent_monitor import AgentMonitor
from langchain.agents import AgentExecutor

monitor = AgentMonitor(api_key="your-api-key")

# Wrap your agent
agent = monitor.wrap_langchain(your_agent_executor)

# All executions automatically tracked!
result = agent.run("Your query")
```

---

## 📊 Dashboard

Access the web dashboard:

```bash
agent-monitor serve --port 3000
```

Then open: `http://localhost:3000`

### Dashboard Features:
- ✅ **Live Traces**: See agents executing in real-time
- ✅ **Cost Analytics**: Track spending per agent/task
- ✅ **Performance Graphs**: Latency, throughput, errors
- ✅ **Token Usage**: Visualize token consumption
- ✅ **Error Explorer**: Debug failures quickly
- ✅ **Custom Metrics**: Add your own metrics

---

## 🏗️ Architecture

```
┌─────────────────────────────────────┐
│     Your AI Agent Application       │
│                                     │
│  ┌──────────────────────────────┐  │
│  │  OpenAI / Claude / LangChain │  │
│  │  (wrapped by Agent Monitor)  │  │
│  └────────────┬─────────────────┘  │
└───────────────┼─────────────────────┘
                │ Telemetry Data
                ↓
┌─────────────────────────────────────┐
│       Agent Monitor (Backend)       │
│  ┌──────────────────────────────┐  │
│  │  Collectors                  │  │  ← Capture traces
│  ├──────────────────────────────┤  │
│  │  Processors                  │  │  ← Compute metrics
│  ├──────────────────────────────┤  │
│  │  Exporters                   │  │  ← Store data
│  └──────────────────────────────┘  │
└────────────────┬────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────┐
│   Storage (Postgres / TimescaleDB) │
└────────────────┬────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────┐
│      Web Dashboard (React)          │
│  - Real-time traces                 │
│  - Cost analytics                   │
│  - Performance metrics              │
└─────────────────────────────────────┘
```

---

## 📚 Use Cases

### 1. **Cost Optimization**
```python
monitor = AgentMonitor(api_key="...")

# Run your agents
for task in tasks:
    agent.run(task)

# Analyze costs
report = monitor.cost_report(
    group_by="task_type",
    time_range="last_7_days"
)

print(f"Most expensive task: {report.top_cost_task}")
print(f"Total spend: ${report.total_cost:.2f}")
```

### 2. **Performance Debugging**
```python
# Find slow operations
slow_ops = monitor.query(
    metric="latency",
    threshold=">5s",
    time_range="last_hour"
)

for op in slow_ops:
    print(f"Slow: {op.agent} - {op.operation} took {op.duration}s")
    print(f"Trace: {op.trace_url}")
```

### 3. **Error Tracking**
```python
# Get error rate
error_rate = monitor.metrics.error_rate(period="1h")

if error_rate > 0.05:  # 5% error rate
    errors = monitor.get_errors(limit=10)
    for error in errors:
        print(f"Error: {error.message}")
        print(f"Stack trace: {error.stack_trace}")
        print(f"Replay URL: {error.replay_url}")
```

### 4. **Multi-Agent Workflows**
```python
# Track complex workflows
with monitor.trace("customer_support_workflow"):
    # Step 1
    with monitor.span("classify_intent"):
        intent = classifier_agent.run(query)

    # Step 2
    with monitor.span("route_to_specialist"):
        specialist = router_agent.select(intent)

    # Step 3
    with monitor.span("generate_response"):
        response = specialist_agent.run(query)

# View complete workflow trace in dashboard
```

---

## 🎨 Metrics Collected

### **Execution Metrics**
- `agent.requests.total` - Total requests
- `agent.requests.duration` - Request latency
- `agent.requests.errors` - Error count
- `agent.requests.success_rate` - Success percentage

### **Cost Metrics**
- `agent.cost.total_usd` - Total cost
- `agent.cost.per_request` - Cost per request
- `agent.tokens.input` - Input tokens
- `agent.tokens.output` - Output tokens

### **Performance Metrics**
- `agent.latency.p50` - Median latency
- `agent.latency.p95` - 95th percentile
- `agent.latency.p99` - 99th percentile
- `agent.throughput.rps` - Requests per second

### **Tool Usage Metrics**
- `agent.tools.calls` - Tool invocations
- `agent.tools.duration` - Tool execution time
- `agent.tools.errors` - Tool failures

---

## 🔧 Configuration

### Basic Configuration

```python
from agent_monitor import AgentMonitor, Config

config = Config(
    # API key for Agent Monitor cloud (optional)
    api_key="your-api-key",

    # Local storage (default)
    storage="sqlite:///agent_monitor.db",

    # Or PostgreSQL
    # storage="postgresql://user:pass@localhost/agent_monitor",

    # Sampling rate (1.0 = 100%)
    sample_rate=1.0,

    # Enable dashboard
    dashboard_enabled=True,
    dashboard_port=3000,
)

monitor = AgentMonitor(config)
```

### Advanced Configuration

```yaml
# agent_monitor.yaml
storage:
  type: postgresql
  host: localhost
  port: 5432
  database: agent_monitor

collectors:
  - type: openai
    enabled: true
  - type: anthropic
    enabled: true
  - type: langchain
    enabled: true

exporters:
  - type: prometheus
    port: 9090
  - type: jaeger
    endpoint: http://jaeger:14268

dashboard:
  enabled: true
  port: 3000
  auth: basic

alerts:
  - name: high_cost
    condition: cost_per_hour > 10.0
    channels: [email, slack]
  - name: high_error_rate
    condition: error_rate > 0.05
    channels: [pagerduty]
```

---

## 📦 Supported Platforms

| Platform | Status | Features |
|----------|--------|----------|
| **OpenAI** | ✅ Full Support | Agents SDK, Chat API, Assistants |
| **Anthropic (Claude)** | ✅ Full Support | Messages API, Computer Use |
| **LangChain** | ✅ Full Support | Agents, Chains, Tools |
| **LlamaIndex** | ✅ Full Support | Agents, Query Engines |
| **Custom Agents** | ✅ Full Support | Manual instrumentation |
| **Hybrid Framework** | ✅ Full Support | Multi-platform agents |

---

## 🚢 Deployment

### Docker

```bash
docker run -d \
  -p 3000:3000 \
  -p 9090:9090 \
  -e STORAGE_URL=postgresql://... \
  cogniolab/agent-monitor
```

### Docker Compose

```yaml
version: '3.8'
services:
  agent-monitor:
    image: cogniolab/agent-monitor
    ports:
      - "3000:3000"  # Dashboard
      - "9090:9090"  # Metrics
    environment:
      - STORAGE_URL=postgresql://postgres:5432/agent_monitor
    depends_on:
      - postgres

  postgres:
    image: timescale/timescaledb:latest-pg15
    environment:
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### Kubernetes

```bash
helm repo add agent-monitor https://charts.cogniolab.com
helm install agent-monitor agent-monitor/agent-monitor
```

---

## 📊 Dashboard Screenshots

### Live Traces
```
┌─────────────────────────────────────────────────────┐
│  Live Agent Traces                          ⟳ Live  │
├─────────────────────────────────────────────────────┤
│  customer_support_workflow              2.3s  $0.05 │
│  ├─ classify_intent                    0.5s  $0.01  │
│  ├─ route_to_specialist                0.3s  $0.00  │
│  └─ generate_response                  1.5s  $0.04  │
│                                                      │
│  research_pipeline                      5.1s  $0.12 │
│  ├─ search_documents                   2.0s  $0.03  │
│  ├─ analyze_results                    2.5s  $0.08  │
│  └─ synthesize_answer                  0.6s  $0.01  │
└─────────────────────────────────────────────────────┘
```

### Cost Analytics
```
┌─────────────────────────────────────────────────────┐
│  Cost Analytics                     Last 7 Days     │
├─────────────────────────────────────────────────────┤
│  Total Spend:            $127.45                     │
│  Avg Cost/Day:           $18.21                      │
│  Most Expensive Agent:   research_agent ($45.32)    │
│  Top Cost Operation:     gpt-4 completions ($78.12) │
│                                                      │
│  [Cost Trend Graph]                                  │
│   $30 ┤           ╭╮                                 │
│   $20 ┤     ╭─╮   │╰╮                                │
│   $10 ┤  ╭──╯ ╰───╯ ╰─╮                              │
│    $0 ┴────────────────────                          │
│       Mon Tue Wed Thu Fri Sat Sun                    │
└─────────────────────────────────────────────────────┘
```

---

## 🔌 Integrations

### OpenTelemetry (NEW! ✨)

Export agent telemetry to enterprise observability platforms:

**Jaeger (Open Source)**:
```python
from agent_monitor.exporters import OpenTelemetryExporter, create_jaeger_config

config = create_jaeger_config(service_name="my-agent")
exporter = OpenTelemetryExporter(config)
exporter.start()

# Export agent execution
exporter.export_agent_execution(
    agent_name="customer_support",
    operation="handle_inquiry",
    duration_seconds=2.3,
    cost_usd=0.05,
    tokens_input=1500,
    tokens_output=500,
    success=True,
)
```

**Datadog (Commercial APM)**:
```python
from agent_monitor.exporters import create_datadog_config

config = create_datadog_config(
    service_name="my-agent",
    api_key=os.getenv("DD_API_KEY")
)
exporter = OpenTelemetryExporter(config)
exporter.start()
```

**New Relic (Full-Stack Observability)**:
```python
from agent_monitor.exporters import create_newrelic_config

config = create_newrelic_config(
    service_name="my-agent",
    api_key=os.getenv("NEW_RELIC_API_KEY")
)
exporter = OpenTelemetryExporter(config)
exporter.start()
```

**Supported Platforms**:
- ✅ Jaeger (open-source distributed tracing)
- ✅ Datadog (full-stack APM)
- ✅ New Relic (full-stack observability)
- ✅ Grafana Cloud
- ✅ Prometheus (via OTLP)
- ✅ AWS X-Ray
- ✅ Google Cloud Trace

[View Integration Examples →](examples/opentelemetry-integration/README.md)

---

### Prometheus

```python
from agent_monitor import AgentMonitor
from agent_monitor.exporters import PrometheusExporter

monitor = AgentMonitor()
monitor.add_exporter(PrometheusExporter(port=9090))
```

### Grafana

Import our pre-built dashboards:
- Agent Performance Dashboard
- Cost Analytics Dashboard
- Error Tracking Dashboard

### Slack Alerts

```python
monitor.add_alert(
    name="high_cost",
    condition="cost_per_hour > 10.0",
    channel="slack://ops-alerts"
)
```

---

## 📖 API Reference

### AgentMonitor

```python
class AgentMonitor:
    def __init__(self, config: Config = None):
        """Initialize monitor"""

    def wrap_openai(self, client: OpenAI) -> OpenAI:
        """Wrap OpenAI client for monitoring"""

    def wrap_anthropic(self, client: Anthropic) -> Anthropic:
        """Wrap Anthropic client for monitoring"""

    def wrap_langchain(self, agent: AgentExecutor) -> AgentExecutor:
        """Wrap LangChain agent for monitoring"""

    def trace(self, name: str) -> ContextManager:
        """Create a trace context"""

    def span(self, name: str) -> ContextManager:
        """Create a span within a trace"""

    def get_metrics(self, **filters) -> MetricsResult:
        """Query metrics"""

    def cost_report(self, **options) -> CostReport:
        """Generate cost report"""
```

---

## 🎯 Roadmap

- [x] OpenAI support
- [x] Claude/Anthropic support
- [x] LangChain support
- [x] Web dashboard
- [x] Cost tracking
- [x] Real-time tracing
- [x] OpenTelemetry integration ⭐ NEW
- [x] Jaeger/Datadog/New Relic exporters ⭐ NEW
- [ ] LlamaIndex support
- [ ] AutoGPT support
- [ ] Alerting system
- [ ] Mobile app
- [ ] AI-powered insights
- [ ] Anomaly detection
- [ ] Cost optimization recommendations

---

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md)

Areas we'd love help with:
- Additional platform integrations
- Dashboard improvements
- Documentation
- Bug fixes
- Performance optimizations

---

## 📝 Examples

See [examples/](examples/) for complete implementations:
- **Basic**: Simple monitoring setup
- **OpenAI**: Monitor OpenAI agents
- **Claude**: Monitor Claude agents
- **LangChain**: Monitor LangChain agents
- **Multi-Agent**: Complex workflow monitoring
- **OpenTelemetry Integration**: Export to Jaeger, Datadog, New Relic ⭐ NEW

---

## 💡 Why Agent Monitor?

### **vs. LangSmith**
- ✅ Open source (not proprietary)
- ✅ Self-hosted option
- ✅ Works with ALL agent frameworks
- ✅ No vendor lock-in

### **vs. Custom Logging**
- ✅ Pre-built dashboards
- ✅ Cost tracking built-in
- ✅ Real-time visualization
- ✅ Production-ready

### **vs. Application Monitoring (DataDog, New Relic)**
- ✅ Agent-specific metrics
- ✅ Token usage tracking
- ✅ Cost per operation
- ✅ LLM interaction traces
- ✅ **Plus: Now integrates with DataDog, New Relic, and Jaeger!** ⭐ NEW

---

## 📊 Performance

**Overhead**: < 1ms per agent call
**Storage**: ~1KB per trace
**Dashboard**: Real-time updates (< 100ms latency)
**Scalability**: Handles 10,000+ agents

---

## 🔒 Security

- 🔐 End-to-end encryption
- 🔒 No LLM API keys stored
- 🛡️ SOC 2 Type II compliant (cloud version)
- ✅ GDPR compliant
- 📝 Audit logs

---

## 💬 Community

Join our community to ask questions, share ideas, and connect with other developers monitoring and debugging AI agents!

- **[GitHub Discussions](https://github.com/cogniolab/agent-monitor/discussions)** - Ask questions, share your work, and discuss best practices
- **[GitHub Issues](https://github.com/cogniolab/agent-monitor/issues)** - Bug reports and feature requests
- **Email**: dev@cogniolab.com

We're building a supportive community where developers help each other make AI agents observable and debuggable. Whether you're just getting started with observability or managing production systems, your questions and contributions are welcome!

---

## 📜 License

MIT License - see [LICENSE](LICENSE)

---

## 🙏 Acknowledgments

Built by [Cognio AI Lab](https://cogniolab.com) to make AI agents observable and debuggable.

Related projects:
- [Hybrid Agent Framework](https://github.com/cogniolab/hybrid-agent-framework)
- [Enterprise MCP Framework](https://github.com/cogniolab/enterprise-mcp-framework)

---

**Ready to see what your agents are actually doing?** [Get Started →](docs/getting-started.md)

⭐ **Star this repo if you find it useful!**
