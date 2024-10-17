Feature: Gestión de logs

  Scenario: Guardar un log exitosamente
    Given que soy un usuario
    When envío una solicitud para guardar un log válido
    Then recibo una respuesta con un mensaje de éxito y un código de estado 201

  Scenario: Error al guardar un log con datos incompletos
    Given que soy un usuario
    When envío una solicitud para guardar un log sin los datos necesarios
    Then recibo una respuesta con un mensaje de error y un código de estado 500

  Scenario: Obtener logs exitosamente
    Given que soy un usuario
    When envío una solicitud para obtener todos los logs
    Then recibo una respuesta con la lista de logs y un código de estado 200

  Scenario: Obtener logs por fecha exitosamente
    Given que soy un usuario
    When envío una solicitud para obtener logs dentro de un rango de fechas válido
    Then recibo una respuesta con la lista de logs y un código de estado 200

  Scenario: Error al obtener logs con rango de fechas inválido
    Given que soy un usuario
    When envío una solicitud para obtener logs con un rango de fechas inválido
    Then recibo una respuesta con un mensaje de error y un código de estado 400


 Scenario: Obtener logs por nivel exitosamente
    Given que soy un usuario
    When envío una solicitud para obtener logs con el nivel "high"
    Then recibo una respuesta con la lista de logs y un código de estado 200

  Scenario: Error al obtener logs por nivel sin especificar nivel
    Given que soy un usuario
    When envío una solicitud para obtener logs sin especificar un nivel
    Then recibo una respuesta con un mensaje de error y un código de estado 400

  Scenario: Obtener logs por aplicación exitosamente
    Given que soy un usuario
    When envío una solicitud para obtener logs de la aplicación "logs"
    Then recibo una respuesta con la lista de logs y un código de estado 200

  Scenario: Error al obtener logs por aplicación sin especificar aplicación
    Given que soy un usuario
    When envío una solicitud para obtener logs sin especificar una aplicación
    Then recibo una respuesta con un mensaje de error y un código de estado 400