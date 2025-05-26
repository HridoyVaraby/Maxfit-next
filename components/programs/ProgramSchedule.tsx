import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ProgramSchedule() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            WEEKLY <span className="text-primary">SCHEDULE</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Find the perfect time for your workout with our comprehensive class schedule
          </p>
        </div>

        <Tabs defaultValue="weekday" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2 mx-auto mb-8">
            <TabsTrigger value="weekday">Weekdays</TabsTrigger>
            <TabsTrigger value="weekend">Weekends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="weekday" className="animate-fadeInUp">
            <div className="bg-background rounded-lg p-4 shadow-sm overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">Time</TableHead>
                    <TableHead>Monday</TableHead>
                    <TableHead>Tuesday</TableHead>
                    <TableHead>Wednesday</TableHead>
                    <TableHead>Thursday</TableHead>
                    <TableHead>Friday</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">6:00 AM - 7:00 AM</TableCell>
                    <TableCell>Morning Cardio</TableCell>
                    <TableCell>Yoga</TableCell>
                    <TableCell>HIIT</TableCell>
                    <TableCell>Power Yoga</TableCell>
                    <TableCell>Functional Training</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">9:00 AM - 10:00 AM</TableCell>
                    <TableCell>Zumba</TableCell>
                    <TableCell>Senior Fitness</TableCell>
                    <TableCell>Zumba</TableCell>
                    <TableCell>Senior Fitness</TableCell>
                    <TableCell>Zumba</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">5:00 PM - 6:00 PM</TableCell>
                    <TableCell>Weight Training</TableCell>
                    <TableCell>Cardio Kickboxing</TableCell>
                    <TableCell>Weight Training</TableCell>
                    <TableCell>Cardio Kickboxing</TableCell>
                    <TableCell>Weight Training</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">7:00 PM - 8:00 PM</TableCell>
                    <TableCell>HIIT</TableCell>
                    <TableCell>Yoga</TableCell>
                    <TableCell>HIIT</TableCell>
                    <TableCell>Yoga</TableCell>
                    <TableCell>Family Fitness</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="weekend" className="animate-fadeInUp">
            <div className="bg-background rounded-lg p-4 shadow-sm overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">Time</TableHead>
                    <TableHead>Saturday</TableHead>
                    <TableHead>Sunday</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">7:00 AM - 8:00 AM</TableCell>
                    <TableCell>Weekend Warrior Workout</TableCell>
                    <TableCell>Gentle Yoga</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">9:00 AM - 10:00 AM</TableCell>
                    <TableCell>Family Fitness</TableCell>
                    <TableCell>Family Fitness</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">11:00 AM - 12:00 PM</TableCell>
                    <TableCell>Zumba Dance Party</TableCell>
                    <TableCell>Meditation & Stretching</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">4:00 PM - 5:00 PM</TableCell>
                    <TableCell>Circuit Training</TableCell>
                    <TableCell>Yoga</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">6:00 PM - 7:00 PM</TableCell>
                    <TableCell>Cardio Blast</TableCell>
                    <TableCell>Restorative Yoga</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12 bg-background p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Important Notes</h3>
          <ul className="text-left list-disc pl-6 space-y-2">
            <li>Classes are subject to change based on trainer availability.</li>
            <li>Please arrive 10 minutes before class starts.</li>
            <li>Booking in advance is recommended for popular classes.</li>
            <li>Personal training sessions are available by appointment.</li>
            <li>Special events and workshops are announced monthly.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}