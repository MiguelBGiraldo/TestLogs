const responseSchemasimple = {
    "type": "object",
    "properties": {
      "error": { "type": "boolean" },
      "mensaje": { "type": "string" },
      "code": { "type": "integer" },
    },
    "required": ["error", "mensaje", "code",]
  }