import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Flights } from "@/types";
import { fetchBookings } from "@/utils/fetchUtils";

const BookingsPage = async () => {
  const bookings = await fetchBookings();

  return (
    <div className="padding-container max-container h-screen">
      <Table>
        <TableCaption>A list of your recent bookings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Flight Type</TableHead>
            <TableHead>Departure Airport</TableHead>
            <TableHead>Arrival Airport</TableHead>
            <TableHead>Departure Date</TableHead>
            <TableHead>Return Date</TableHead>
            <TableHead>Departure Time</TableHead>
            <TableHead>Return Time</TableHead>
            <TableHead>Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings &&
            bookings.map((flight: Flights) => (
              <TableRow key={flight.id}>
                <TableCell>{flight.flightType}</TableCell>
                <TableCell>{flight.origin}</TableCell>
                <TableCell>{flight.destination}</TableCell>
                <TableCell>{flight.departureDate.split("T")[0]}</TableCell>
                <TableCell>
                  {flight.returnDate && flight.returnDate.split("T")[0]}
                </TableCell>
                <TableCell>{flight.departureTime}</TableCell>
                <TableCell>{flight.returnTime}</TableCell>
                <TableCell>{flight.age}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BookingsPage;
