import { Bell, Search } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Header = () => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className=" hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search" className="pl-10 w-80" />
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/api/placeholder/32/32" />
                  <AvatarFallback>VB</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <div className="font-medium">Vijayabala</div>
                  <div className="text-gray-500">Admin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Header
