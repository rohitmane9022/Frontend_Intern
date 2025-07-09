'use client';

import { useState } from 'react';
import {
  BarChart3,
  BookOpen,
  GraduationCap,
  MessageCircle,
  DollarSign,
  Settings,
  Users,
  MoreHorizontal,
  Eye,
  Clock,
  Calendar,
  Play,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import CardComponent from '@/components/CardComponent';

const revenueData = [
  { month: 'Jan', income: 45000, expenses: 32000 },
  { month: 'Feb', income: 52000, expenses: 35000 },
  { month: 'Mar', income: 48000, expenses: 38000 },
  { month: 'Apr', income: 58000, expenses: 42000 },
  { month: 'May', income: 65000, expenses: 45000 },
  { month: 'Jun', income: 72000, expenses: 48000 },
  { month: 'Jul', income: 78000, expenses: 52000 },
];

const placementData = [
  { month: 'Jan-Mar', placed: 350, completed: 280 },
  { month: 'Apr-May', placed: 420, completed: 300 },
  { month: 'May-Jun', placed: 380, completed: 320 },
  { month: 'Jul-Aug', placed: 450, completed: 380 },
  { month: 'Sep-Oct', placed: 480, completed: 420 },
  { month: 'Oct-Nov', placed: 520, completed: 450 },
];

const students = [
  { name: 'Vijayabala', status: 'Enrolled', course: 'UI/UX Design', enrolled: '19/04/2023', progress: 85 },
  { name: 'Praveen', status: 'Enrolled', course: 'Full Stack Development', enrolled: '18/04/2023', progress: 72 },
  { name: 'Arun', status: 'Enrolled', course: 'Front-End Development', enrolled: '04/04/2023', progress: 90 },
  { name: 'Ajith', status: 'Enrolled', course: 'Back-End Development', enrolled: '25/03/2023', progress: 65 },
  { name: 'Manohar', status: 'Enrolled', course: 'UI/UX Design', enrolled: '20/03/2023', progress: 78 },
  { name: 'Anu', status: 'Unenrolled', course: 'Front-End Development', enrolled: '01/04/2023', progress: 45 },
];

const trainers = [
  { name: 'Arun', role: 'Full Stack Developer', avatar: '/api/placeholder/40/40' },
  { name: 'Saranya', role: 'Front-End Development', avatar: '/api/placeholder/40/40' },
  { name: 'Bala', role: 'UI/UX Designer', avatar: '/api/placeholder/40/40' },
  { name: 'Saranya', role: 'Front-End Developer', avatar: '/api/placeholder/40/40' },
];

const courses = [
  { title: 'UI/UX Design', lessons: 19, icon: '🎨', color: 'bg-blue-500' },
  { title: 'Full Stack Development', lessons: 20, icon: '💻', color: 'bg-cyan-500' },
  { title: 'Front-End Development', lessons: 20, icon: '🌐', color: 'bg-purple-500' },
];

const sidebarItems = [
  { icon: BarChart3, label: 'Dashboard', active: true },
  { icon: BookOpen, label: 'Courses' },
  { icon: Users, label: 'Students' },
  { icon: GraduationCap, label: 'Trainers' },
  { icon: MessageCircle, label: 'Message' },
  { icon: DollarSign, label: 'Payment' },
  { icon: Settings, label: 'Settings' },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <Header/>

        <div className="p-6">
          <CardComponent/>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="md:text-lg text-base">Revenue</CardTitle>
                    <p className="text-sm text-gray-500">Income & Expenses Comparison</p>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={revenueData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="income" stroke="#6366F1" strokeWidth={2} />
                          <Line type="monotone" dataKey="expenses" stroke="#EC4899" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="md:text-lg text-base">Placement Data</CardTitle>
                    <p className="text-sm text-gray-500">Placed Students 1650</p>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={placementData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="placed" fill="#6366F1" />
                          <Bar dataKey="completed" fill="#EC4899" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Student Details */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Student Details</CardTitle>
                    <Button variant="outline" size="sm">
                      See all
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="all">View All</TabsTrigger>
                      <TabsTrigger value="enrolled">Enrolled</TabsTrigger>
                      <TabsTrigger value="active">Active User</TabsTrigger>
                      <TabsTrigger value="unenrolled">Unenrolled</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="mt-4">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Students</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Course</TableHead>
                            <TableHead>Enrolled</TableHead>
                            <TableHead>Progress</TableHead>
                            <TableHead>Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {students.map((student, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{student.name}</TableCell>
                              <TableCell>
                                <Badge variant={student.status === 'Enrolled' ? 'default' : 'secondary'}>
                                  {student.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{student.course}</TableCell>
                              <TableCell>{student.enrolled}</TableCell>
                              <TableCell>
                                <div className="flex items-center space-x-2">
                                  <Progress value={student.progress} className="w-16" />
                                  <span className="text-sm">{student.progress}%</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                      <MoreHorizontal className="w-4 h-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent>
                                    <DropdownMenuItem>View Details</DropdownMenuItem>
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            
            <div className="space-y-6">
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Active Trainers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                   
                    <div className="grid grid-cols-7 gap-1 text-center text-xs">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div key={day} className="p-2 font-medium text-gray-500">
                          {day}
                        </div>
                      ))}
                      {[22, 23, 24, 25, 26, 27, 28].map((date) => (
                        <div 
                          key={date} 
                          className={`p-2 rounded-full ${date === 25 ? 'bg-indigo-600 text-white' : 'text-gray-700'}`}
                        >
                          {date}
                        </div>
                      ))}
                    </div>

                   
                    <div className="space-y-3">
                      {trainers.map((trainer, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={trainer.avatar} />
                              <AvatarFallback>{trainer.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-sm">{trainer.name}</div>
                              <div className="text-xs text-gray-500">{trainer.role}</div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

             
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Active Courses</CardTitle>
                    <Button variant="outline" size="sm">
                      See all
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courses.map((course, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full ${course.color} flex items-center justify-center text-white`}>
                            {course.icon}
                          </div>
                          <div>
                            <div className="font-medium text-sm">{course.title}</div>
                            <div className="text-xs text-gray-500">{course.lessons} Lessons</div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className='sm:text-base text-sm'>
                          View More
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              
              <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Webinar</h3>
                      <p className="text-sm opacity-90 mb-4">
                        Turn Your IT Strategy Into Reality With an Extensible Blueprint
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>10 Minutes</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>06 June 2023</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" className="bg-white text-indigo-600 hover:bg-gray-100">
                      <Play className="w-4 h-4 mr-2" />
                      Join
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}