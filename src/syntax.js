const _ = require('lodash')

const colorConfig = require('./color.json')

const configFactory = type => {
  const colorObj = colorConfig['classic']

  /**
   * Default theme settings
   */
  const tokenColorsDefault = [
    {
      name: 'support.constant.edge',
      scope: 'support.constant.edge',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'regexp constant character-class',
      scope: 'constant.other.character-class.regexp',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'regexp operator.quantifier',
      scope: 'keyword.operator.quantifier.regexp',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'string quotes',
      scope: [
        'string.quoted.double',
        'string.quoted.single',
      ],
      settings: {
        foreground: colorObj['green']
      }
    },
    {
      name: 'Text',
      scope: 'variable.parameter.function',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Comments',
      scope: 'comment, punctuation.definition.comment',
      settings: {
        foreground: colorObj['lightDark'],
        fontStyle: 'italic'
      }
    },
    {
      name: 'Comment Markup Link',
      scope: 'comment markup.link',
      settings: {
        foreground: colorObj['dark']
      }
    },
    {
      name: 'markup diff',
      scope: 'markup.changed.diff',
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'diff',
      scope: 'meta.diff.header.from-file,punctuation.definition.from-file.diff',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'inserted.diff',
      scope: 'markup.inserted.diff',
      settings: {
        foreground: colorObj['green']
      }
    },
    {
      name: 'deleted.diff',
      scope: 'markup.deleted.diff',
      settings: {
        foreground: colorObj['red']
      }
    },
    {
      name: 'c++ function',
      scope: 'meta.function.c',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'c++ block',
      scope:
        'punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'js/ts italic',
      scope:
        'entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super',
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      name: 'function variable parameters',
      scope: 'variable.parameter,variable.language.super',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'js/ts import keyword',
      scope: 'keyword.operator.expression.import',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'js/ts import brace',
      scope: 'meta.import',
      settings: {
        foreground: colorObj['cyan']
      }
    },
    {
      name: 'math js/ts',
      scope: 'support.constant.math',
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'math property js/ts',
      scope: 'support.constant.property.math',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'js/ts variable.other.constant',
      scope: 'variable.other.constant',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'java type',
      scope: 'storage.type.annotation.java',
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'java source',
      scope: 'source.java',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'java modifier.import',
      scope:
        'punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,storage.type.generic.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,meta.method.body.java',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'java modifier.import',
      scope: 'meta.method.java',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'java modifier.import',
      scope: 'storage.modifier.import.java,storage.type.java',
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'java variable.name',
      scope: 'meta.definition.variable.name.java',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'operator logical',
      scope: 'keyword.operator.logical.js',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'operator bitwise',
      scope: 'keyword.operator.bitwise',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'operator channel',
      scope: 'keyword.operator.channel',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'support.constant.property-value.scss',
      scope:
        'support.constant.property-value.scss,support.constant.property-value.css',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'CSS/SCSS/LESS Operators',
      scope: 'keyword.operator.css,keyword.operator.scss,keyword.operator.less',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'css color standard name',
      scope:
        'support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'css comma',
      scope: 'punctuation.separator.list.comma.css',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'css attribute-name.id',
      scope: 'support.constant.color.w3c-standard-color-name.css',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'css property-name',
      scope: 'support.type.vendored.property-name.css',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'js/ts template-expression quotes',
      scope:
        'punctuation.definition.string.template.begin,punctuation.definition.string.template.end',
      settings: {
        foreground: colorObj['blue']
      }
    },
    {
      name: 'template-expression String interpolation',
      scope: [
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end'
      ],
      settings: {
        foreground: colorObj['blue']
      }
    },
    {
      name: 'js/ts module',
      scope:
        'support.module.node,support.type.object.module,support.module.node',
      settings: {
        foreground: colorObj['cyan']
      }
    },
    {
      name: 'entity.name.type.module',
      scope: 'entity.name.type.module',
      settings: {
        foreground: colorObj['cyan']
      }
    },
    {
      name: 'js variable readwrite',
      scope:
        'variable.other.readwrite,support.variable.property,support.variable.object.process,support.variable.object.node',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'jsx children variable calls',
      scope: 'meta.jsx.children variable.other.readwrite',
      settings: {
        foreground: colorObj['lightCyan']
      }
    },
    {
      name: 'object key',
      scope: [
        'meta.object-literal.key',
        'meta.object-literal.key string.quoted.double',
        'meta.object-literal.key string.quoted.single',
        'meta.object-literal.key string',
      ],
      settings: {
        // fontStyle: 'italic'
        foreground: colorObj['lightCyan']
      }
    },
    {
      name: 'object key punctuation separator key-value',
      scope: 'punctuation.separator.key-value',
      settings: {
        foreground: colorObj['lightCyan']
      }
    },
    {
      name: 'array-literal brace',
      scope: [
        'meta.array.literal'
      ],
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'comment',
      scope: 'comment.line.double-slash,comment.block.documentation',
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      name: 'js/ts json',
      scope: 'support.constant.json',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'js/ts Keyword',
      scope: [
        'keyword.operator.expression.instanceof',
        'keyword.operator.new',
        'keyword.operator.ternary',
        'keyword.operator.optional'
      ],
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'js/ts console',
      scope: 'support.class.console',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'js/ts support.variable.property.process',
      scope: 'support.variable.property.process',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'js console function',
      scope: 'support.function.console',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'js operator',
      scope: 'keyword.operator',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'js dom',
      scope: 'support.type.object.dom',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'js dom variable',
      scope: 'support.variable.dom,support.variable.property.dom',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'keyword.operator',
      scope:
        'keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'C operator assignment',
      scope:
        'keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'Punctuation',
      scope: 'punctuation.separator.delimiter',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Punctuation Accessor',
      scope: 'punctuation.accessor',
      settings: {
        foreground: colorObj['cyan']
      }
    },
    {
      name: 'Other punctuation .c',
      scope: 'punctuation.separator.c',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'JS/TS Punctuation object destructuring brace',
      scope: [
        'punctuation.definition.binding-pattern.object'
      ],
      settings: {
        foreground: colorObj['cyan']
      }
    },
    {
      name: 'JS/TS Punctuation object brace',
      scope: [
        'meta.objectliteral'
      ],
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Punctuation function parenthesis',
      scope: [
        'meta.function'
      ],
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Punctuation function brace',
      scope: [
        'meta.block'
      ],
      settings: {
        foreground: colorObj['cyan']
      }
    },
    {
      name: 'JS/TS Punctuation function parenthesis',
      scope: [
        'meta.function.expression'
      ],
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'C type posix-reserved',
      scope: 'support.type.posix-reserved.c',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'keyword.operator.sizeof.c',
      scope: 'keyword.operator.sizeof.c',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'python parameter',
      scope: 'variable.parameter.function.language.python',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'python type',
      scope: 'support.type.python',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'python logical',
      scope: 'keyword.operator.logical.python',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'meta.function-call.arguments.python',
      scope: 'meta.function-call.arguments.python',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'meta.function-call.python',
      scope: 'meta.function-call.python',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'pyCs',
      scope: 'variable.parameter.function.python',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'python block',
      scope:
        'punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python,meta.function-call.arguments.python',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'python function-call.generic',
      scope: 'meta.function-call.generic.python',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'python placeholder reset to normal string',
      scope: 'constant.character.format.placeholder.other.python',
      settings: {
        foreground: colorObj['green']
      }
    },
    {
      name: 'Delimiters',
      scope: 'none',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Operators',
      scope: 'keyword.operator',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'Compound Assignment Operators',
      scope: 'keyword.operator.assignment.compound',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'Keywords',
      scope: 'keyword',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'Variables',
      scope: 'variable',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Java Variables',
      scope: 'token.variable.parameter.java',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Java Imports',
      scope: 'import.storage.java',
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'Packages',
      scope: 'token.package.keyword',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'Packages',
      scope: 'token.package',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Functions',
      scope: [
        'meta.function-call'
      ],
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Function definition',
      scope: [
        'meta.function'
      ],
      settings: {
        foreground: colorObj['cyan']
      }
    },
    {
      name: 'Classes',
      scope: 'entity.name.type.namespace',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Classes',
      scope: 'support.class, entity.name.type.class',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Class name',
      scope: 'entity.name.class.identifier.namespace.type',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Class name',
      scope: [
        'entity.name.class',
        'variable.other.class.js',
        'variable.other.class.ts'
      ],
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Class name php',
      scope: 'variable.other.class.php',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'JSX component',
      scope: [
        'support.class.component'
      ],
      settings: {
        foreground: colorObj['green']
      }
    },
    {
      name: 'Type Name',
      scope: 'entity.name.type',
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'Keyword Control',
      scope: 'keyword.control',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'Keyword Control',
      scope: 'keyword.control.flow',
      settings: {
        // don't use purple, which is used for storage (variables)
        foreground: colorObj['blue']
      }
    },
    {
      name: 'Python Keyword Control',
      scope: 'keyword.control.import.python,keyword.control.flow.python',
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      name: 'Control Elements',
      scope: 'control.elements, keyword.operator.less',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'Methods',
      scope: 'keyword.other.special-method',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'Storage',
      scope: 'storage',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'Storage JS TS',
      scope: 'token.storage',
      settings: {
        foreground: colorObj['purple']
      }
    },
    // {
    //   name: 'Function JS TS',
    //   scope: 'storage.type.function',
    //   settings: {
    //     foreground: colorObj['slateBlue']
    //   }
    // },
    {
      name:
        'Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void',
      scope:
        'keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'Java Storage',
      scope: 'token.storage.type.java',
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'Support',
      scope: 'support.function',
      settings: {
        foreground: colorObj['cyan']
      }
    },
    {
      name: 'Support type',
      scope: 'support.type.property-name',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Support type',
      scope: 'support.constant.property-value',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Support type',
      scope: 'support.constant.font-name',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'Meta tag',
      scope: 'meta.tag',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Meta embedded expression',
      scope: [
        'meta.embedded.expression',
        'meta.embedded.expression'
      ],
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'Strings, Inherited Class',
      scope: 'string, entity.other.inherited-class',
      settings: {
        foreground: colorObj['green']
      }
    },
    {
      name: 'Constant other symbol',
      scope: 'constant.other.symbol',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'Integers',
      scope: 'constant.numeric',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'Floats',
      scope: 'none',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'Boolean',
      scope: 'none',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'Constants',
      scope: 'constant',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'Constants',
      scope: 'punctuation.definition.constant',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'Constants import export',
      scope: 'constant.language.import-export-all',
      settings: {
        foreground: colorObj['cyan']
      }
    },
    {
      name: 'Tags',
      scope: 'entity.name.tag',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'Attributes',
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: colorObj['blue']
      }
    },
    {
      name: 'Attribute IDs',
      scope: 'entity.other.attribute-name.id',
      settings: {
        foreground: colorObj['slateBlue'],
        fontStyle: 'normal'
      }
    },
    {
      name: 'Attribute class',
      scope: 'entity.other.attribute-name.class.css',
      settings: {
        foreground: colorObj['cyan'],
        fontStyle: 'normal'
      }
    },
    {
      name: 'Selector',
      scope: 'meta.selector',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'Values',
      scope: 'none',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'Headings',
      scope: 'markup.heading',
      settings: {
        fontStyle: 'bold'
      }
    },
    {
      name: 'Headings',
      scope:
        'entity.name.section',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'Units',
      scope: 'keyword.other.unit',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Todo Bold',
      scope: 'todo.bold',
      settings: {
        fontStyle: 'bold',
        foreground: colorObj['purple']
      }
    },
    {
      name: 'Punctuation Bold',
      scope: 'punctuation.definition.bold',
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'Italic',
      scope: 'markup.italic, punctuation.definition.italic,todo.emphasis',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'Italic',
      scope: 'emphasis md',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown headings',
      scope: 'markup.heading entity.name.section',
      scope: [
        'markup.heading',
        'markup.heading entity.name.section'
      ],
      settings: {
        foreground: colorObj['cyan']
      }
    },
    // {
    //   name: '[VSCODE-CUSTOM] Markdown heading Punctuation Definition',
    //   scope: 'punctuation.definition.heading.markdown',
    //   settings: {
    //     foreground: colorObj['lightWhite']
    //   }
    // },
    // {
    //   name: 'punctuation.definition.list.begin.markdown',
    //   scope: 'punctuation.definition.list.begin.markdown',
    //   settings: {
    //     foreground: colorObj['lightWhite']
    //   }
    // },
    {
      name: '[VSCODE-CUSTOM] Markdown heading setext',
      scope: 'markup.heading.setext',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Bold',
      scope: 'punctuation.definition.bold.markdown',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Inline Raw',
      scope: 'markup.inline.raw.markdown',
      settings: {
        foreground: colorObj['green']
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Inline Raw',
      scope: 'markup.inline.raw.string.markdown',
      settings: {
        foreground: colorObj['green']
      }
    },
    // {
    //   name: '[VSCODE-CUSTOM] Markdown List Punctuation Definition',
    //   scope: 'punctuation.definition.list.markdown',
    //   settings: {
    //     foreground: colorObj['lightWhite']
    //   }
    // },
    {
      name: '[VSCODE-CUSTOM] Markdown Quote',
      scope: 'markup.quote.markdown',
      settings: {
        foreground: colorObj['dark'],
        fontStyle: 'italic'
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Numbered List',
      scope: 'markup.list.numbered',
      settings: {
        foreground: colorObj['peach'],
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Unnumbered List',
      scope: 'markup.list.unnumbered',
      settings: {
        foreground: colorObj['lightCyan'],
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Punctuation Definition String',
      scope: [
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown',
        'punctuation.definition.metadata.markdown'
      ],
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Link',
      scope: 'punctuation.definition.metadata.markdown',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Underline Link/Image',
      scope:
        'markup.underline.link.markdown,markup.underline.link.image.markdown',
      settings: {
        foreground: colorObj['blue']
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Link Title/Description',
      scope:
        'string.other.link.title.markdown,string.other.link.description.markdown',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'markup.italic.markdown',
      scope: 'markup.italic.markdown',
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      name: 'markup.bold.markdown',
      scope: 'markup.bold.markdown',
      settings: {
        fontStyle: 'bold',
        foreground: colorObj['purple']
      }
    },
    {
      name: 'Regular Expressions',
      scope: 'string.regexp',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'Escape Characters',
      scope: 'constant.character.escape',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'Embedded',
      scope: 'punctuation.section.embedded, variable.interpolation',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Illegal',
      scope: 'invalid.illegal',
      settings: {
        foreground: colorObj['invalid']
      }
    },
    {
      name: 'Broken',
      scope: 'invalid.broken',
      settings: {
        foreground: colorObj['invalid']
      }
    },
    {
      name: 'Deprecated',
      scope: 'invalid.deprecated',
      settings: {
        foreground: colorObj['invalid']
      }
    },
    {
      name: 'Unimplemented',
      scope: 'invalid.unimplemented',
      settings: {
        foreground: colorObj['invalid']
      }
    },
    {
      name: 'Json Meta Structure Dictionary',
      scope: 'meta.structure.dictionary.json',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Json Meta Structure Array',
      scope: 'meta.structure.array.json',
      settings: {
        foreground: colorObj['blue']
      }
    },
    {
      name: 'Json Meta Structure Array Punctuation',
      scope: 'punctuation.separator.array.json',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Source Json Meta Structure Dictionary Json > String Quoted Json',
      scope: 'source.json meta.structure.dictionary.json > string.quoted.json',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name:
        'Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String',
      scope:
        'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name:
        'Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation',
      scope:
        'source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
      settings: {
        foreground: colorObj['green']
      }
    },
    {
      name:
        'Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json',
      scope:
        'source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: '[VSCODE-CUSTOM] JSON Property Name',
      scope: 'support.type.property-name.json',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: '[VSCODE-CUSTOM] JSON Property Value',
      scope: [
        'string.quoted.double.json',
        'string.quoted.single.json'
      ],
      settings: {
        foreground: colorObj['green']
      }
    },
    {
      name: '[VSCODE-CUSTOM] JSON Punctuation for Property Name',
      scope: 'support.type.property-name.json punctuation',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'laravel blade tag',
      scope:
        'text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'laravel blade @',
      scope:
        'text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'use statement for other classes',
      scope:
        'support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php',
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'error suppression',
      scope: 'keyword.operator.error-control.php',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'php instanceof',
      scope: 'keyword.operator.type.php',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'style double quoted array index normal begin',
      scope: 'punctuation.section.array.begin.php',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'style double quoted array index normal end',
      scope: 'punctuation.section.array.end.php',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'php illegal.non-null-typehinted',
      scope: 'invalid.illegal.non-null-typehinted.php',
      settings: {
        foreground: colorObj['error']
      }
    },
    {
      name: 'php types',
      scope:
        'storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php',
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'php call-function',
      scope:
        'meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'php function-resets',
      scope:
        'punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'support php constants',
      scope:
        'support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'php goto',
      scope: 'entity.name.goto-label.php,support.other.php',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'php logical/bitwise operator',
      scope:
        'keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'php regexp operator',
      scope: 'keyword.operator.regexp.php',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'php comparison',
      scope: 'keyword.operator.comparison.php',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'php dollar sign',
      scope: 'punctuation.definition.variable.php',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'php heredoc/nowdoc',
      scope: 'keyword.operator.heredoc.php,keyword.operator.nowdoc.php',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'python function decorator @',
      scope: 'meta.function.decorator.python',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'python function support',
      scope:
        'support.token.decorator.python,meta.function.decorator.identifier.python',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'parameter function',
      scope: 'function.parameter',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'parameter function js/ts',
      scope: 'function.parameter',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'brace function',
      scope: 'function.brace',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'parameter function ruby cs',
      scope: 'function.parameter.ruby, function.parameter.cs',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'constant.language.symbol.ruby',
      scope: 'constant.language.symbol.ruby',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'rgb-value',
      scope: 'rgb-value',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'rgb value',
      scope: 'inline-color-decoration rgb-value',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'rgb value less',
      scope: 'less rgb-value',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'sass selector',
      scope: 'selector.sass',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'js ts this',
      scope:
        'var.this,variable.language.this.js,variable.language.this.ts,variable.language.this.jsx,variable.language.this.tsx',
      settings: {
        // foreground: colorObj['peach'],
        fontStyle: 'italic'
      }
    },
    {
      name: 'ts primitive/builtin types',
      scope:
        'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'js, ts class field declarations',
      scope: [
        'meta.field.declaration.js.jsx variable',
        'meta.field.declaration.ts variable',
        'meta.field.declaration.tsx variable'
      ],
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'js, ts class method declarations',
      scope: [
        'meta.method.declaration.js.jsx',
        'meta.method.declaration.ts',
        'meta.method.declaration.tsx'
      ],
      settings: {
        foreground: colorObj['cyan']
      }
    },
    {
      name: 'block scope',
      scope: 'block.scope.end,block.scope.begin',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'cs storage type',
      scope: 'storage.type.cs',
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'cs local variable',
      scope: 'entity.name.variable.local.cs',
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: colorObj['error']
      }
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'Reset JavaScript string interpolation expression',
      scope: ['meta.template.expression'],
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Import module JS',
      scope: ['keyword.operator.module'],
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'js Flowtype',
      scope: ['support.type.type.flowtype'],
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'js Flow',
      scope: ['support.type.primitive'],
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'js class prop',
      scope: ['meta.property.object'],
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'js func parameter',
      scope: ['variable.parameter.function.js'],
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'js operator.assignment',
      scope: ['keyword.operator.assignment'],
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'go operator',
      scope: ['keyword.operator.assignment.go', 'keyword.operator.address.go'],
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'Go package name',
      scope: ['entity.name.package.go'],
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'elm prelude',
      scope: ['support.type.prelude.elm'],
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'elm constant',
      scope: ['support.constant.elm'],
      settings: {
        foreground: colorObj['orange']
      }
    },
    {
      name: 'template literal',
      scope: ['punctuation.quasi.element'],
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'html/pug (jade) escaped characters and entities',
      scope: ['constant.character.entity'],
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name:
        'styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour',
      scope: [
        'entity.other.attribute-name.pseudo-element',
        'entity.other.attribute-name.pseudo-class'
      ],
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'Clojure globals',
      scope: ['entity.global.clojure'],
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'Clojure symbols',
      scope: ['meta.symbol.clojure'],
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Clojure constants',
      scope: ['constant.keyword.clojure'],
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'CoffeeScript Function Argument',
      scope: ['meta.arguments.coffee', 'variable.parameter.function.coffee'],
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Ini Default Text',
      scope: ['source.ini'],
      settings: {
        foreground: colorObj['green']
      }
    },
    {
      name: 'Makefile prerequisities',
      scope: ['meta.scope.prerequisites.makefile'],
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Makefile text colour',
      scope: ['source.makefile'],
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'Groovy import names',
      scope: ['storage.modifier.import.groovy'],
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'Groovy Methods',
      scope: ['meta.method.groovy'],
      settings: {
        foreground: colorObj['slateBlue']
      }
    },
    {
      name: 'Groovy Variables',
      scope: ['meta.definition.variable.name.groovy'],
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'Groovy Inheritance',
      scope: ['meta.definition.class.inherited.classes.groovy'],
      settings: { foreground: colorObj['green'] }
    },
    {
      name: 'HLSL Semantic',
      scope: ['support.variable.semantic.hlsl'],
      settings: {
        foreground: colorObj['peach']
      }
    },
    {
      name: 'HLSL Types',
      scope: [
        'support.type.texture.hlsl',
        'support.type.sampler.hlsl',
        'support.type.object.hlsl',
        'support.type.object.rw.hlsl',
        'support.type.fx.hlsl',
        'support.type.object.hlsl'
      ],
      settings: {
        foreground: colorObj['purple']
      }
    },
    {
      name: 'SQL Variables',
      scope: ['text.variable', 'text.bracketed'],
      settings: {
        foreground: colorObj['lightWhite']
      }
    },
    {
      name: 'types',
      scope: ['support.type.swift', 'support.type.vb.asp'],
      settings: {
        foreground: colorObj['peach']
      }
    }
  ]

  return {
    tokenColors: tokenColorsDefault
  }
}

module.exports = {
  classic: configFactory('classic')
}
