"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTotalAppointments, getTotalBlogs, getTotalUsers } from "@/lib/action/action";
import { Separator } from "@radix-ui/react-separator";
import { CalendarCheck2, LayoutDashboard, Shapes, Users } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [totalUsers, setTotalUsers] = useState<number | null>(null);
    const [totalBlogs, setTotalBlogs] = useState<number | null>(null);
    const [totalAppointments, setTotalAppointments] = useState<number | null>(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const users = await getTotalUsers();
    //         const blogs = await getTotalBlogs();
    //         const appointments = await getTotalAppointments();

    //         setTotalUsers(users);
    //         setTotalBlogs(blogs);
    //         setTotalAppointments(appointments);
    //     };

    //     fetchData();
    // }, []);

  return (
    <div className="px-8 py-10 min-h-screen">
      <p className="text-4xl text-white w-full font-extrabold border-b-[2px] border-gray-700 mb-8">
        Dashboard
      </p>
      <Separator className="my-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card className="bg-gray-900 text-white border-[1px] border-gray-700 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="text-gray-100">Total Appointments</CardTitle>
              <CalendarCheck2 className="text-gray-400" strokeWidth={1.5} />
            </CardHeader>
            <CardContent>
              <p className="font-bold text-2xl">34</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white border-[1px] border-gray-700 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="text-gray-100">Total Users</CardTitle>
              <Users className="text-gray-400" strokeWidth={1.5} />
            </CardHeader>
            <CardContent>
              <p className="font-bold text-2xl">
            44

              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white border-[1px] border-gray-700 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="text-gray-100">Blog Posts</CardTitle>
              <Shapes className="text-gray-400" strokeWidth={1.5} />
            </CardHeader>
            <CardContent>
              <p className="font-bold text-2xl">324</p>
            </CardContent>
          </Card>
        </div>
        <Card className="bg-gray-900 text-white border-[1px] border-gray-700 rounded-lg shadow-lg mt-5">
          <CardHeader className="flex flex-row gap-2  items-center text-lg">
            <CalendarCheck2 className="text-gray-400 text-lg" strokeWidth={1.5} />
            <CardTitle className="text-gray-400 text-lg">Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, vel eveniet eius, quae maiores similique laboriosam magni aspernatur tenetur culpa aut, repudiandae quas at sunt enim. Explicabo ipsum iusto, perferendis sint fugiat velit amet laudantium culpa recusandae, aspernatur rem quibusdam ducimus corrupti maxime veniam pariatur non praesentium ea. Libero cum natus optio laborum illum unde!</p>
          </CardContent>
        </Card>
      </Separator>
    </div>
  );
}
