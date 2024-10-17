const responseSchemaLogs = {
    "type": "object",
    "properties": {
      "logs": {"type": "array"},
      "error": { "type": "boolean" },
      "mensaje": { "type": "string" },
      "code": { "type": "integer" },
    },
    "required": ["error", "mensaje", "code","logs"]
  }