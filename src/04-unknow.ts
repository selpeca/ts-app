let anyVar:any
anyVar = 12
anyVar = true
anyVar = 'string'

let isNew: boolean = anyVar

anyVar.doSomething()
anyVar.touppercase()

let unknowVar: unknown;
unknowVar = true
unknowVar = 'sda'
unknowVar = null
unknowVar = 1
// Previene errores de tipo
if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase()
}
