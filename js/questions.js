// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Python программалау тіліндегі жолдық типті белгілеңіз ?",
    answer: "str",
    options: [
      "if",
      "def",
      "int",
      "str",
      "float"
    ]
  },
  {
    numb: 2,
    question: "Индексация операциясын табыңыз ?",
    answer: `>>> s=‘Astana’
    Print (s[0])      # ‘A’
’
`,
    options: [
      `>>> ‘Astana’+’  city’
      ‘Astana city’
`,
      `>>>  ‘Astana’*3
      ‘AstanaAstanaAstana’
`,
      `>>> s = ‘Astana’
      `,
      `>>> s=‘Astana’
      Print (s[0])      # ‘A’
`,
      `>>>  s= ‘Astana city’
      >>> s[7:10]
              ‘cit’
 `,
    ]
  },
  {
    numb: 3,
    question: "Аргумент (параметр) дегеніміз не?",
    answer: `шақыру кезінде негізгі программадан ішкі программаға берілетін мән.`,
    options: [
      `шақыру кезінде негізгі программадан ішкі программаға берілетін мән.`,
      `қажет кезінде атымен шақыру, іске қосу`,
      `белгілі бір тапсырманы орындайтын операторлар тобы`,
      `қайтып оралатын немесе қайтып оралмайтын мәндерден тұратын ішкі программалар`,
      `def кілттік сөзінен басталатын ішкі программа`,
    ]
  },
  {
    numb: 4,
    question: "Рекурсия дегеніміз не?    ",
    answer: `объектілерді немесе есептеу процестерін өзі арқылы сипаттау тәсілі`,
    options: [
      `өзін тікелеу немесе басқа функциялар арқылы шақыратын функция`,
      `параметрдің өзгеше мәні мен функцияның өзін шақыратын қадам`,
      `объектілерді немесе есептеу процестерін өзі арқылы сипаттау тәсілі`,
      `уақытша деректердің сақтауға арналған құрылғы аумағы`,
      `қайтып оралатын немесе қайтып оралмайтын мәндерден тұратын ішкі программаларды орындау тәсілі`,
    ]
  },
  {
    numb: 5,
    question: "Жолды жоғары регистрге түрлендіретін әдісті таңдаңыз",
    answer: `a1=a.upper()`,
    options: [
      `a1=a.upper()`,
      `a1=lower()`,
      `a1=upper()`,
      `a1=a.lower()`,
      `a1=upper(a)`,
    ]
  },
  {
    numb: 6,
    question: "Есептеңіз.  өрнегі үшін жазылған дұрыс функцияны табыңыз",
    answer: `x=7
    def beka(a,b):
    return a**2+3*b**3-5*x
    print(beka(5,4))`,
    options: [
      `x=7
      def beka(a,b):
      y= a**2+3*b**3-5*x
      print(y)
      `,
      `x=7
      def beka(a,b):
      return a**2+3*b**3-5*x
      print(y)
      `,
      `x=7
      def beka(a,b):
      y= a**2+3*b**3-5*x
      print(return y)
      `,
      `x=7
      def beka(a,b):
      a=5;
      b=4;
      return 
      print(a**2+3*b**3-5*x)
      `,
      `x=7
      def beka(a,b):
      return a**2+3*b**3-5*x
      print(beka(5,4))
      `,
    ]
  },
  {
    numb: 7,
    question: "Файлдан ақпаратты оқуды жүзеге асыратын программалық кодты табыңыз",
    answer: `file = open("mybook.txt", "r")
    data = file.readlines() 
    print(data)
    file.close()`,
    options: [
      `file = open("mybook.txt", "r")
      data = file.readlines() 
      print(data)
      file.close()`,
      `file = open("mybook.txt", "w")
      file.write("hello")
      file.close()`,
      `file = open("mybook.txt", "w")
      read("hello")
      file.close()`,
      `file = open("mybook.txt", "r")
      file.read() 
    print()
    file.close()`,
      `data = file.read() 
      print(mybook.txt)
      file.close()
`,
    ]
  },
  {
    numb: 8,
    question: "n!(n>=0) натурал санының факториалын есептейтін функцияны табыңыз",
    answer: ``,
    options: [
      `def factorial (n)
      if n>=0
      return 1
      else:
      return factorial(n-1)

`,
      `def factorial (n)
      if n==0:
      return 1
      else:
      return n

`,
      `def factorial (n)
      if n==1:
      return 0
      else:
      return n*factorial(n)

`,
      `def factorial (n)
      if n==0:
      return 1
      else:
      return n*factorial

`,
      `def factorial (n)
      if n==0:
      return 1
      else:
      return n*factorial(n-1)

`,
    ]
  },
  {
    numb: 9,
    question: "Жолдың ұзындығын анықтайтын функцияны көрсетіңіз    ",
    answer: `len (a)
    `,
    options: [
      `ord (‘a’)
      `,
      `len (a)
      `,
      `chr (a)
      `,
      `str (a)
      `,
      `lenth(a)`,
    ]
  },
  {
    numb: 10,
    question: "Конкатенация операциясын белгілеңіз",
    answer: `) >>> ‘Astana’+’  city’
    ‘Astana city’
`,
    options: [
      `) >>> ‘Astana’+’  city’
      ‘Astana city’
`,
      `>>>  ‘Astana’*3
      ‘AstanaAstanaAstana’
`,
      `>>> s = ‘Astana’
      `,
      `>>> s=‘Astana’
      Print (s[0])      # ‘A’
  `,
      `>>>  s= ‘Astana city’
      >>> s[7:10]
              ‘cit’
 `,
    ]
  },
  {
    numb: 11,
    question: "Екі өлшемді массивтің Python-да белгіленуі",
    answer: `A[i][j]`,
    options: [
      `A[i][j]`,
      `Ai,j`,
      `A(i)(j)`,
      `A[n][m]`,
      `A(n)( m)
      `,
    ]
  },
  {
    numb: 12,
    question: "N=int(input()) – массивтің …………… енгізеді",
    answer: `ұзындығын`,
    options: [
      `ұзындығын`,
      `жолын`,
      `санын`,
      `мәнін`,
      `өлшемін`,
    ]
  },
  {
    numb: 13,
    question: "Python-да массив қалай таныстырылады?    ",
    answer: `from array import array`,
    options: [
      `from array import array`,
      `from array import `,
      `array import array `,
      `from import array `,
      `array from array `,
    ]
  },
  {
    numb: 14,
    question: "input()) операторы арқылы енгізілген деректер жолдық дерек болады. Оны санға айналдыру үшін .......... пайдаланамыз  ",
    answer: `int`,
    options: [
      `int`,
      `from`,
      `array`,
      `import`,
      `str`,
    ]
  },
  {
    numb: 15,
    question: `Келесі код фрагменті нені білдіреді:
    N=5
    for i in range(0,N): `,
    answer: `і мәні 0-ден 5-ке дейін өзгереді 
    `,
    options: [
      `і мәні 0-ден 5-ке дейін өзгереді 
      `,
      `Массив элементтерін қолмен енгізуді `,
      `Массивтегі жұп элементтерді анықтау`,
      `Файлдан тізімнің ұзындығын оқиды`,
      `Тақ элементтерді жолға айналдарып жазады`,
    ]
  },
  {
    numb: 16,
    question: "Келесі код фрагменті нені білдіреді: A[i] = int( input()) ",
    answer: `Массив элементтерін қолмен енгізуді`,
    options: [
      `Массив элементтерін қолмен енгізуді`,
      `Массивтегі жұп элементтерді анықтау `,
      `Жұп элементтерді жолға айналдарып жазады `,
      `Файлдан тізімнің ұзындығын оқиды `,
      `Тақ элементтерді жолға айналдарып жазады`,
    ]
  },
  {
    numb: 17,
    question: "Келесі код фрагменті нені білдіреді:  if A[i] % 2==0 : ",
    answer: `Массивтегі жұп элементтерді анықтау`,
    options: [
      `Массивтегі жұп элементтерді анықтау`,
      `Массив элементтерін қолмен енгізуді `,
      `Жұп элементтерді жолға айналдарып жазады`,
      `Файлдан тізімнің ұзындығын оқиды`,
      `Тақ элементтерді жолға айналдарып жазады`,
    ]
  },
  {
    numb: 18,
    question: "Келесі код фрагменті нені білдіреді: ​N = int(f.readline())",
    answer: `Файлдан тізімнің ұзындығын оқиды `,
    options: [
      `Жұп элементтерді жолға айналдырып жазады`,
      `Файлдан тізімнің ұзындығын оқиды `,
      `Файлдан тізімнің ұзындығын оқиды `,
      `Массив элементтерін қолмен енгізуді `,
      `Файлды ашады`,
    ]
  },
  {
    numb: 19,
    question: `Келесі код фрагменті нені білдіреді: f = open('input.txt',"r") `,
    answer: `Файлды оқу үшін ашады `,
    options: [
      `Файлды ашады`,
      `Жұп элементтерді жолға айналдырып жазады`,
      `Файлдан тізімнің ұзындығын оқиды `,
      `Файлды оқу үшін ашады `,
      `Массив элементтерін қолмен енгізуді `,
    ]
  },
  {
    numb: 20,
    question: `Келесі код фрагменті нені білдіреді: ​​if A[i] % 2==0 : ​h.write(str(A[i])+"\n") `,
    answer: `Жұп элементтерді жолға айналдырып жазады`,
    options: [
      `Жұп элементтерді жолға айналдырып жазады`,
      `Жұп элементтерді оқиды `,
      `Жұп элементтерді ашады `,
      `Файлдан жұп элементтерді іздейді `,
      `Тақ элементтерді жолға айналдарып жазады`,
    ]
  },
];