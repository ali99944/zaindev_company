"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, ChevronRight, Send, Loader2 } from "lucide-react"
import Image from "next/image"

// Types
type Category = {
  id: string
  name: string
  icon: string
  questions: Question[]
}

type Question = {
  id: string
  text: string
}

type Message = {
  id: string
  type: "user" | "bot"
  text: string
  timestamp: Date
}

// Sample data
const categories: Category[] = [
  {
    id: "building",
    name: "البناء والتشييد",
    icon: "🏗️",
    questions: [
      { id: "b1", text: "ما هي تكلفة بناء منزل بمساحة 300 متر مربع؟" },
      { id: "b2", text: "ما هي أفضل مواد البناء للمناخ الحار؟" },
      { id: "b3", text: "كم من الوقت يستغرق بناء فيلا سكنية؟" },
      { id: "b4", text: "ما هي الخطوات الأساسية لبناء منزل؟" },
    ],
  },
  {
    id: "design",
    name: "التصميم الداخلي",
    icon: "🎨",
    questions: [
      { id: "d1", text: "ما هي أحدث صيحات التصميم الداخلي لعام 2025؟" },
      { id: "d2", text: "كيف أختار الألوان المناسبة لمنزلي؟" },
      { id: "d3", text: "ما هي أفضل الخامات للأثاث في المناخ الحار؟" },
      { id: "d4", text: "كيف أستغل المساحات الصغيرة في التصميم الداخلي؟" },
    ],
  },
  {
    id: "renovation",
    name: "الترميم والتجديد",
    icon: "🔨",
    questions: [
      { id: "r1", text: "ما هي تكلفة تجديد منزل قديم؟" },
      { id: "r2", text: "كيف أعرف إذا كان المنزل بحاجة إلى ترميم؟" },
      { id: "r3", text: "ما هي أفضل طريقة لتجديد المطبخ؟" },
      { id: "r4", text: "هل يمكن ترميم المنزل مع الاستمرار في العيش فيه؟" },
    ],
  },
  {
    id: "consultation",
    name: "الاستشارات",
    icon: "💡",
    questions: [
      { id: "c1", text: "كيف يمكنني حجز استشارة مع فريقكم؟" },
      { id: "c2", text: "ما هي تكلفة الاستشارات الهندسية؟" },
      { id: "c3", text: "هل تقدمون استشارات عن بعد؟" },
      { id: "c4", text: "ما هي مدة الاستشارة المجانية؟" },
    ],
  },
  {
    id: "services",
    name: "الخدمات",
    icon: "🛠️",
    questions: [
      { id: "s1", text: "ما هي الخدمات التي تقدمها شركة زين التنموية؟" },
      { id: "s2", text: "هل تقدمون خدمات الصيانة الدورية؟" },
      { id: "s3", text: "هل تقدمون خدمات التصميم الخارجي للحدائق؟" },
      { id: "s4", text: "ما هي مناطق تغطية خدماتكم؟" },
    ],
  },
]

// Bot responses
const botResponses = [
  "شكراً لسؤالك! يسعدنا في زين التنموية تقديم المساعدة. تختلف تكلفة البناء حسب المواصفات والموقع، لكن يمكننا تقديم تقدير مبدئي بعد دراسة متطلباتك. نرجو التواصل مع فريقنا على الرقم 800 123 4567 لتحديد موعد استشارة مجانية.",
  "يسعدنا الإجابة على استفسارك! في زين التنموية، نقدم مجموعة متكاملة من الخدمات تشمل التصميم والبناء والترميم والصيانة. يمكنك الاطلاع على تفاصيل خدماتنا في قسم الخدمات بموقعنا الإلكتروني.",
  "سؤال رائع! نعم، نقدم استشارات عن بعد عبر تطبيقات الاتصال المرئي مثل Zoom أو Microsoft Teams، مما يتيح لك الاستفادة من خبراتنا بغض النظر عن موقعك.",
  "نقدم في زين التنموية استشارة مجانية أولية مدتها 30 دقيقة، يمكنك من خلالها مناقشة احتياجاتك الأساسية والحصول على توجيهات أولية لمشروعك.",
  "نغطي حالياً العديد من المدن الرئيسية في المملكة العربية السعودية مثل الرياض، جدة، مكة المكرمة، المدينة المنورة، الدمام والخبر. نعمل على التوسع لتغطية المزيد من المناطق قريباً.",
  "يمكنك حجز استشارة من خلال ملء نموذج طلب الاستشارة في موقعنا الإلكتروني أو الاتصال بنا مباشرة على الرقم 800 123 4567. سيقوم فريقنا بالتواصل معك لتحديد الموعد المناسب.",
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      // Reset chat when opening
      setSelectedCategory(null)
      setMessages([
        {
          id: "welcome",
          type: "bot",
          text: "مرحباً بك في خدمة دعم زين التنموية! كيف يمكنني مساعدتك اليوم؟",
          timestamp: new Date(),
        },
      ])
    }
  }

  const selectCategory = (category: Category) => {
    setSelectedCategory(category)
    addMessage("bot", `رائع! إليك بعض الأسئلة الشائعة حول ${category.name}. يمكنك اختيار سؤال أو كتابة سؤالك الخاص.`)
  }

  const selectQuestion = (question: Question) => {
    addMessage("user", question.text)
    simulateBotResponse()
  }

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      addMessage("user", inputValue)
      setInputValue("")
      simulateBotResponse()
    }
  }

  const addMessage = (type: "user" | "bot", text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      text,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const simulateBotResponse = () => {
    setIsTyping(true)
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
      addMessage("bot", randomResponse)
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-4 right-4 z-[999] w-12 h-12 rounded-full   shadow flex items-center justify-center bg-gray-800 text-amber-500 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-10rem)] bg-white rounded shadow overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-amber-500 text-black p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="https://img.freepik.com/premium-vector/initial-letter-z-logo-design-vector-template_448617-543.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid"
                  alt="Zain Development"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <h3 className="font-bold">دعم زين التنموية</h3>
                  <p className="text-xs opacity-80">نحن هنا لمساعدتك</p>
                </div>
              </div>
              <button onClick={toggleChat} className="hover:bg-black/10 p-1 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded p-3 ${
                      message.type === "user"
                        ? "bg-amber-500 text-black rounded-tr-none"
                        : "bg-white text-gray-800  border border-gray-100 rounded-tl-none"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70 text-right">
                      {message.timestamp.toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="mb-4 flex justify-start">
                  <div className="bg-white text-gray-800 rounded rounded-tl-none p-3  border border-gray-100">
                    <div className="flex gap-1">
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              {!selectedCategory && messages.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm text-gray-600 mb-2">اختر موضوعاً للمساعدة:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => selectCategory(category)}
                        className="bg-white p-3 rounded border border-gray-200 hover:border-amber-500 transition-colors flex items-center gap-2 text-right"
                      >
                        <span className="text-xl">{category.icon}</span>
                        <span className="text-sm font-medium">{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectedCategory && (
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <p className="text-sm font-medium flex items-center gap-1">
                      <span>{selectedCategory.icon}</span>
                      <span>{selectedCategory.name}</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    {selectedCategory.questions.map((question) => (
                      <button
                        key={question.id}
                        onClick={() => selectQuestion(question)}
                        className="bg-white p-3 rounded border border-gray-200 hover:border-amber-500 transition-colors text-right w-full text-sm"
                      >
                        {question.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-gray-200 bg-white">
              <div className="flex items-center gap-2">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="اكتب رسالتك هنا..."
                  className="flex-1 resize-none border border-gray-200 rounded p-1.5 focus:outline-none  max-h-20"
                  rows={1}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    inputValue.trim() && !isTyping
                      ? "bg-amber-500 text-black"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {isTyping ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-500">© {new Date().getFullYear()} زين التنموية. جميع الحقوق محفوظة</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

