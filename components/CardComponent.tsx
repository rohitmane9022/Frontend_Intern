import React from 'react'
import { Card, CardContent } from './ui/card'
import { GraduationCap, TrendingUp, UserPlus, Users } from 'lucide-react'

const CardComponent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
    {/* Stats Cards */}
    <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-blue-600">Total User</p>
            <p className="text-3xl font-bold text-blue-900">2201</p>
          </div>
          <Users className="w-8 h-8 text-blue-500" />
        </div>
      </CardContent>
    </Card>

    <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-green-600">Total Students</p>
            <p className="text-3xl font-bold text-green-900">1901</p>
          </div>
          <GraduationCap className="w-8 h-8 text-green-500" />
        </div>
      </CardContent>
    </Card>

    <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-red-600">New Students</p>
            <p className="text-3xl font-bold text-red-900">1001</p>
          </div>
          <UserPlus className="w-8 h-8 text-red-500" />
        </div>
      </CardContent>
    </Card>

    <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-yellow-600">Trained Students</p>
            <p className="text-3xl font-bold text-yellow-900">881</p>
          </div>
          <TrendingUp className="w-8 h-8 text-yellow-500" />
        </div>
      </CardContent>
    </Card>
  </div>
  )
}

export default CardComponent
