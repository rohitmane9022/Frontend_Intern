'use client'

import { useState } from 'react'
import { BarChart3, BookOpen, DollarSign, GraduationCap, Menu, MessageCircle, Settings, Users, X } from 'lucide-react' 

const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', active: true },
    { icon: BookOpen, label: 'Courses' },
    { icon: Users, label: 'Students' },
    { icon: GraduationCap, label: 'Trainers' },
    { icon: MessageCircle, label: 'Message' },
    { icon: DollarSign, label: 'Payment' },
    { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      
      <div className="md:hidden p-4 flex justify-between items-center bg-indigo-600 text-white">
        <div className="text-lg font-bold">TB Institute</div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

     
      <div className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-indigo-600 to-indigo-700 text-white z-40 transform transition-transform duration-300 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`}>
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="bg-white text-indigo-600 rounded-lg p-2 font-bold text-lg">TB</div>
            <div className="font-semibold">TB Institute</div>
          </div>

          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-white bg-opacity-20 text-white'
                    : 'text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  )
}
