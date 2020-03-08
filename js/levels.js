var levels = [
  {
    helpTitle : "Выберите элементы по их типу",
    selectorName : "Tип селектора",
    doThis : "Выберите тарелки",
    selector : "plate",
    syntax : "A",
    help : "Выбирает все элементы типа <strong>A</strong>. Тип относится к типу тега, поэтому <tag>div</tag>, <tag>p</tag> и <tag>ul</tag> — разные типы элементов.",
    examples : [
      '<strong>div</strong> выбирает все <tag>div</tag> элементы.',
      '<strong>p</strong> выбирает <tag>p</tag> элементы.',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `
  },
  {
    doThis : "Выберите контейнеры с лотками",
    selector : "bento",
    syntax : "A",
    helpTitle : "Выберите элементы по их типу",
    selectorName : "Тип селектора",
    help : "Выбирает все элементы типа <strong>A</strong>. Тип относится к типу тега, поэтому <tag>div</tag>, <tag>p</tag> и <tag>ul</tag> — разные типы элементов.",
    examples : [
      '<strong>div</strong> выбирает все <tag>div</tag> элементы.',
      '<strong>p</strong> выбирает все <tag>p</tag> элементы.',
    ],
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis : "Выберите необычную тарелку",
    selector : "#fancy",
    selectorName: "ID Селектор",
    helpTitle: "Выберите элементы по их ID",
    syntax: "#id",
    help : 'Выбирает элемент с определенным<strong>id</strong>. Вы также можете комбинировать ID селектора с селектором типа.',
    examples : [
      '<strong>#cool</strong> выбирает любой элемент с <strong>id="cool"</strong>',
      '<strong>ul#long</strong> выбирает <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    helpTitle: "Выберите элемент внутри другого элемента",
    selectorName : "Селектор потомка",
    doThis : "Выберите яблоко на тарелке",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",
    help : "Выбирает все <strong>B</strong> внутри <strong>A</strong>. <strong>B</strong> называется потомком, потому что он внутри другого элемента.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> выбирает все <tag>strong</tag> элементы, которые внутри любого <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> выбирает все <tag>span</tag> элементы, которые находятся внутри элемента с <strong>id="fancy"</strong>',
    ],
    boardMarkup : `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    doThis : "Выберите огурец на необычной тарелке",
    selector : "#fancy pickle",
    helpTitle: "Комбинируйте потомки и ID селекторов",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Вы можете комбинировать любой селектор с потомком селектора.',
    examples : [
      '<strong>#cool&nbsp;span</strong> выбирает все <tag>span</tag> элементы, которые внутри элемента с <strong>id="cool"</strong>'
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    doThis : "Выберите все маленькие яблоки",
    selector : ".small",
    selectorName: "Селекторы классов",
    helpTitle: "Выберите элементы по их классу",
    syntax: ".classname",
    help : 'Селектор класса выбирает все элементы с этим атрибутом класса. Элементы могут иметь только один ID, но много классов.',
    examples : [
    '<strong>.neato</strong> выбирает все элементы с <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    doThis : "Выберите маленькие апельсины",
    selector : "orange.small",
    helpTitle: "Комбинируйте Классы Селекторов",
    syntax: "A.className",
    help : 'Вы можете комбинировать селектор класса с другими селекторами, такими как селектор типа.',
    examples : [
      '<strong>ul.important</strong> выбирает все <tag>ul</tag> элементы, которые имеют <strong>class="important"</strong>',
      '<strong>#big.wide</strong> выбирает все элементы с <strong>id="big"</strong> которые также имеют <strong>class="wide"</strong>'
    ],
    boardMarkup :`
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    doThis : "Выберите маленькие апельсины на лотках",
    selector : "bento orange.small",
    syntax: "Постарайтесь!",
    helpTitle: "Вы можете это сделать...",
    help : 'Объедините то, что вы узнали на последних нескольких уровнях, чтобы решить это!',
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  },
  {
    doThis : "Выберите все тарелки и лотки",
    selector : "plate,bento",
    selectorName : "Множественный комбинатор",
    helpTitle: "Объедините, селекторы, используя ... запятые!",
    syntax : "A, B",
    help : 'Спасибо технологии Шатнер, которая выбирает все <strong>A</strong> и <strong>B</strong> элементы. Вы можете комбинировать любые селекторы таким образом, и также, вы можете указать более двух.',
    examples: [
    '<strong>p, .fun</strong> выбирает все <tag>p</tag> элементы, а также все элементы с <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> выбирает все <tag>a</tag>, <tag>p</tag> и <tag>div</tag> элементы'
    ],
    boardMarkup : `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    doThis : "Выберите все вещи!",
    selector : "*",
    selectorName:  "Универсальный селектор",
    helpTitle: "Вы можете выбрать все!",
    syntax : "*",
    help : 'Вы можете выбрать все элементы с помощью универсального селектора!',
    examples : [
      '<strong>p *</strong> выбирает любой элемент внутри всех <tag>p</tag> элементов.',
    ],
    boardMarkup : `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `
  },
  {
    doThis : "Выберите все на тарелке",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Объедините Универсальный Селектор",
    help : 'Выбирает все элементы внутри <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> выбирает каждый элемент внутри всех <tag>p</tag> элементов.',
      '<strong>ul.fancy *</strong> выбирает каждый элемент внутри всех <tag>ul class="fancy"</tag> элементов.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`
  },
  {
    doThis : "Выберите каждое яблоко, которое рядом с тарелкой",
    selector : "plate + apple",
    helpTitle: "Выберите элемент, который следует непосредственно за другим элементом",
    selectorName: "Соседний Селектор",
    syntax : "A + B",
    help : "Выбирает все <strong>B</strong> элементы, которые непосредственно следуют за <strong>A</strong>. Элементы, которые следуют друг за другом, называются соседними. Они на одном уровне или глубине. <br/><br/>В разметке HTML для этого уровня элементы с одинаковыми отступами являются соседними элементами.",
    examples : [
      '<strong>p + .intro</strong> выбирает каждый элемент с <strong>class="intro"</strong>, который непосредственно следует за <tag>p</tag>',
      '<strong>div + a</strong> выбирает каждый <tag>a</tag> элемент, который непосредственно следует за <tag>div</tag>'
    ],
    boardMarkup : `
    <bento>
      <apple class="small"/>
    </bento>
    <plate />
    <apple class="small"/>
    <plate />
    <apple/>
    <apple class="small"/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "Главный Соседний Селектор",
    helpTitle: "Выберите элементы, которые следуют за другим элементом",
    syntax: "A ~ B",
    doThis : "Выберите огурцы рядом с лотком",
    selector : "bento ~ pickle",
    help : "Вы можете выбрать все элементы одного элемента, которые следуют за ним. Это похоже на Смежный селектор (A + B), за исключением того, что он получает все следующие элементы вместо одного.",
    examples : [
      '<strong>A ~ B</strong> выбирает все <strong>B</strong>, которые следуют за <strong>A</strong>'
    ],
    boardMarkup : `
    <pickle/>
    <bento>
      <orange class="small"/>
    </bento>
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <plate>
      <pickle class="small"/>
    </plate>
    `
  },
  {
    selectorName: "Дочерный Селектор",
    syntax: "A > B&nbsp;",
    doThis : "Выберите яблоко прямо на тарелке",
    selector : "plate > apple",
    helpTitle: "Выберите прямых потомков элемента",
    help : "Вы можете выбрать элементы, которые являются прямыми потомками других элементов. Дочерний элемент - это любой элемент, который вложен непосредственно в другой элемент. <br> <br> Элементы, которые вложены глубже, называются элементами-потомками.",
    examples : [
      '<strong>A > B</strong> выбирает все <strong>B</strong>, которые являются прямыми потомками <strong>A</strong>'
    ],
    boardMarkup: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "Первый Дочерний Псевдо-селектор",
    helpTitle: "Выберите первый дочерний элемент внутри другого элемента",
    doThis : "Выберите верхний апельсин",
    selector : "plate :first-child",
    syntax: ":first-child",

    help : "Вы можете выбрать первый дочерний элемент. Дочерний элемент - это любой элемент, который непосредственно вложен в другой. Вы можете комбинировать этот псевдоселектор с другими селекторами.",
    examples : [
      '<strong>:first-child</strong> выбирает все первые дочерние элементы.',
      '<strong>p:first-child</strong> выбирает все первые дочерние <tag>p</tag> элементы.',
      '<strong>div p:first-child</strong> выбирает все первые дочерние <tag>p</tag> элементы, которые находятся в <tag>div</tag>.'
    ],
    boardMarkup :`
    <bento/>
    <plate />
    <plate>
      <orange />
      <orange />
      <orange />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "Единственный Дочерний Псевдо-селектор",
    helpTitle: "Выберите элемент, который является единственным элементом внутри другого.",
    doThis : "Выберите яблоко и огурец на тарелках",
    selector : "plate :only-child",
    syntax: ":only-child",
    help : "Вы можете выбрать любой элемент, который является единственным элементом внутри другого.",
    examples : [
      '<strong>span:only-child</strong> выбирает <tag>span</tag> элементы, которые являются единственным потомком некоторого другого элемента.',
      '<strong>ul li:only-child</strong> выбирают только <tag>li</tag> элемент, который находится в <tag>ul</tag>.'
    ],
    boardMarkup : `
    <plate>
      <apple/>
    </plate>
    <plate>
      <pickle />
    </plate>
    <bento>
      <pickle />
    </bento>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "Последний Дочерний Псевдо-селектор",
    helpTitle: "Выберите последний элемент внутри другого элемента",
    doThis : "Выберите маленькое яблоко и огурец",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "Вы можете использовать этот селектор, чтобы выбрать элемент, который является последним дочерним элементом внутри другого элемента. <br><br>Профессиональный совет &rarr; В тех случаях, когда есть только один элемент, этот элемент считается первым-дочерним, единственным-дочерним и последним-дочерним!",
    examples : [
      '<strong>:last-child</strong> выбирает все последние дочерние элементы.',
      '<strong>span:last-child</strong> выбирает все последние дочерние <tag>span</tag> элементы.',
      '<strong>ul li:last-child</strong> выбирает последний <tag>li</tag> элемент, который находится внутри любого <tag>ul</tag>.'
    ],
    boardMarkup : `
    <plate id="fancy">
      <apple class="small"/>
    </plate>
    <plate/>
    <plate>
      <orange class="small"/>
      <orange>
    </plate>
    <pickle class="small"/>`
  },
  {
    selectorName: "Порядковый Дочерний Псевдо-селектор",
    helpTitle: "Выберите элемент по порядку в другом элементе",
    doThis : "Выберите 3-ю тарелку",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "Выбирает <strong>nth</strong> (Пример: 1-й, 3-й, 12-й и т.д.) дочерний элемент в другом элементе.",
    examples : [
      '<strong>:nth-child(8)</strong> выбирает каждый элемент, который является 8-м дочерним элементом другого элемента.',
      '<strong>div p:nth-child(2)</strong> выбирает второй <strong>p</strong> в каждом <strong>div</strong>',
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    `
  },
  {
    selectorName: "Последний Порядковый Дочерний Селектор",
    helpTitle: "Выберите элемент по порядку в другом элементе, считая с конца",
    doThis : "Выберите 1-й лоток",
    selector : "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "Выбирает предков из нижней части родителя. Это как n-предок, но считая с конца!",
    examples : [
      '<strong>:nth-last-child(2)</strong> выбирает все второстепенные дочерние элементы..'
    ],
    boardMarkup: `
    <plate/>
    <bento/>
    <plate>
      <orange/>
      <orange/>
      <orange/>
    </plate>
    <bento/>
    `
  },
  {
    selectorName: "Первичный Тип Селектора",
    helpTitle: "Выберите первый элемент определенного типа",
    doThis : "Выберите первое яблоко",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    help : "Выбирает первый элемент этого типа в другом элементе.",
    examples : [
      '<strong>span:first-of-type</strong> выбирает первый <tag>span</tag> в любом элементе.'
    ],
    boardMarkup: `
    <orange class="small"/>
    <apple/>
    <apple class="small"/>
    <apple/>
    <apple class="small"/>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    `
  },
  {
    selectorName: "Порядковый Тип Селектора",
    doThis: "Выберите все четные тарелки",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Выбирает определенный элемент на основе его типа и порядка в другом элементе - или четных или нечетных экземпляров этого элемента.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> выбирает второй экземпляр div.',
      '<strong>.example:nth-of-type(odd)</strong> выбирает все нечетные экземпляры класса примера.'
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    <plate/>
    `
  },
  {
    selectorName: "Селектор N-го типа с Формулой",
    doThis: "Выберите каждую 2-ю тарелку, начиная с 3-й",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "Формула n-типа выбирает каждый n-й элемент, начиная отсчет с определенного экземпляра этого элемента.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> выбирает каждый 6-й экземпляр <tag>span</tag>, начиная со (и в том числе) второго экземпляра'
    ],
    boardMarkup : `
    <plate/>
    <plate>
      <pickle class="small" />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate/>
    <plate>
      <apple />
    </plate>
    <plate/>
    `
  },
  {
    selectorName: "Единственный Тип Селектора",
    helpTitle: "Выберите элементы, которые являются единственными в своем роде, в своем родительском элементе",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "Выберите яблоко на средней тарелке",
    help : "Выбирает единственный элемент своего типа внутри другого элемента.",
    examples : [
      '<strong>p span:only-of-type</strong> выбирает <tag>span</tag> в любом <tag>p</tag>, если это единственный <tag>span</tag> внутри.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
      <apple />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate>
      <pickle />
    </plate>
    `
  },
  {
    selectorName: "Последний из Типа Селектора",
    helpTitle: "Выберите последний элемент определенного типа",
    doThis : "Выберите последнее яблоко и апельсин",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "Выбирает каждый последний элемент этого типа в другом элементе. Помните, что тип относится к типу тега, поэтому <tag>p</tag> и <tag>span</tag> — разные. <br><br> Интересно, так ли был выбран последний динозавр, прежде чем он вымер?",
    examples : [
      '<strong>div:last-of-type</strong> выбирает последний <tag>div</tag> в каждом элементе.',
      '<strong>p span:last-of-type</strong> выбирает последний <tag>span</tag> в каждом <tag>p</tag>.'
    ],
    boardMarkup : `
    <orange class="small"/>
    <orange class="small" />
    <pickle />
    <pickle />
    <apple class="small" />
    <apple class="small" />
    `
  },
  {
    selectorName: "Пустой Селектор",
    helpTitle: "Выберите элементы, которые не имеют потомков",
    doThis : "Выберите пустой лоток",
    selector : "bento:empty",
    syntax: ":empty",
    help : "Выбирает элементы, которые не имеют других элементов внутри них.",
    examples : [
      '<strong>div:empty</strong> выбирает все пустые <tag>div</tag> элементы.'
    ],
    boardMarkup:`
    <bento/>
    <bento>
      <pickle class="small"/>
    </bento>
    <plate/>
    <bento/>`
  },
  {
    selectorName: "Псевдо-класс Отрицания",
    helpTitle: "Выберите все элементы, которые не соответствуют селектору отрицания",
    doThis : "Выберите большие яблока",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : 'Вы можете использовать это, чтобы выбрать все элементы, которые не соответствуют селектору <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#fancy)</strong> выбирает все элементы, которые не имеют <strong>id="fancy"</strong>.',
      '<strong>div:not(:first-child)</strong> выбирает каждый <tag>div</tag>, который не является первым потомком',
      '<strong>:not(.big, .medium)</strong> выбирает все элементы, которые не имеют <strong>class="big"</strong> или <strong>class="medium"</strong>.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
    </plate>
    <plate>
      <apple />
    </plate>
    <apple />
    <plate>
      <orange class="small" />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "Атрибут Селектора",
    helpTitle: "Выберите все элементы, которые имеют определенный атрибут",
    doThis : "Выберите для кого-то предметы",
    selector : "[for]",
    syntax: "[attribute]",
    help : 'Атрибуты появляются внутри открывающего тега элемента, например так: <tag>span attribute="value"</tag>. Атрибут не всегда имеет значение, он может быть пустым!',
    examples : [
      '<strong>a[href]</strong> выбирает все <tag>a</tag> элементы, которые имеют атрибут <strong>href="anything"</strong>.',
      '<strong>[type]</strong> выбирает все элементы, которые имеют атрибут <strong>type="anything"</strong>.'
    ],
    boardMarkup:`
    <bento><apple class="small"/></bento>
    <apple for="Ethan"/>
    <plate for="Alice"><pickle/></plate>
    <bento for="Clara"><orange/></bento>
    <pickle/>`
  },
  {
    selectorName: "Атрибут Селектора",
    helpTitle: "Выберите все элементы, которые имеют определенный атрибут",
    doThis : "Выберите для кого-то тарелки",
    selector : "plate[for]",
    syntax: "A[attribute]",
    help : "Скомбинируйте селектор атрибута с другим селектором (например, селектор имени тега), добавив его в конец.",
    examples : [
      '<strong>[value]</strong> выбирает все элемениы, которые имеют атрибут <strong>value="anything"</strong>',
      '<strong>a[href]</strong> выбирает <tag>a</tag> элементы, которые имеют атрибут <strong>href="anything"</strong>',
      '<strong>input[disabled]</strong> выбирает все <tag>input</tag> выбирает все элементы вместе с атрибутом <strong>disabled</strong>'
    ],
    boardMarkup:`
    <plate for="Sarah"><pickle/></plate>
    <plate for="Luke"><apple/></plate>
    <plate/>
    <bento for="Steve"><orange/></bento>
    `
  },
  {
    selectorName: "Значение Атрибута Селектора",
    helpTitle: "Выберите все элементы, которые имеют определенное значение атрибута",
    doThis : "Выберите блюдо Виталия",
    selector : "[for=Vitaly]",
    syntax: '[attribute="value"]',
    help : "Атрибуты селекторов чувствительны к регистру, каждый символ должен точно совпадать.",
    examples : [
      '<strong>input[type="checkbox"]</strong> выбирает все элементы ввода.'
    ],
    boardMarkup:`
    <apple for="Alexei" />
    <bento for="Albina"><apple /></bento>
    <bento for="Vitaly"><orange/></bento>
    <pickle/>
    `
  },
  {
    selectorName: "Начало Атрибута в Селекторе",
    helpTitle: "Выберите все элементы со значением атрибута, которое начинается с определенных символов",
    doThis : "Выберите элементы для имен, которые начинаются с 'Sa'",
    selector : '[for^="Sa"]',
    syntax: '[attribute^="value"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples : [
      '<strong>.toy[category^="Swim"]</strong> выбирает элементы с классом <strong>toy</strong>, либо <strong>category="Swimwear"</strong> или <strong>category="Swimming"</strong>.'
    ],
    boardMarkup: `
    <plate for="Sam"><pickle/></plate>
    <bento for="Sarah"><apple class="small"/></bento>
    <bento for="Mary"><orange/></bento>
    `
  },
  {
    selectorName: "Конец Атрибута в Селекторе",
    helpTitle: "Выберите все элементы со значением атрибута, которое заканчивается определенными символами",
    doThis : "Выберите элементы для имен, которые заканчиваются на 'ato'",
    selector : '[for$="ato"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> выбирает все изображения <strong>.jpg</strong>',
    ],
    boardMarkup:`
    <apple class="small"/>
    <bento for="Hayato"><pickle/></bento>
    <apple for="Ryota"></apple>
    <plate for="Minato"><orange/></plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "Селектор Подстановочных Знаков Атрибута",
    helpTitle: "Выберите все элементы со значением атрибута, которое содержит определенные символы в любом месте",
    syntax: '[attribute*="value"]',
    doThis : "Выберите блюда для имен, которые содержат 'obb'",
    selector : '[for*="obb"]',
    help : 'Полезный селектор, если вы можете определить общий шаблон в таких вещах, как атрибут <strong>class</strong>, <strong>href</strong> или <strong>src</strong>',
    examples : [
      '<strong>img[src*="/thumbnails/"]</strong> выбирает все элементы изображения, которые показывают изображения, из папки "thumbnails".',
      '<strong>[class*="heading"]</strong> выделяет все элементы с "heading" в своем классе, например <strong>class="main-heading"</strong> и <strong>class="sub-heading"</strong>'
    ],
    boardMarkup:`
    <bento for="Robbie"><apple /></bento>
    <bento for="Timmy"><pickle /></bento>
    <bento for="Bobby"><orange /></bento>
    `
  }
];
