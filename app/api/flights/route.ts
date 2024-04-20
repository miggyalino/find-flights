import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const flights = await prisma.flights.findMany({});
  return NextResponse.json(flights);
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const booked_flight = await prisma.flights.create({
      data: {
        ...json,
      },
    });
    return NextResponse.json(booked_flight, { status: 201 });
  } catch (error) {
    console.error("Error creating employee:", error);
    return NextResponse.json(error, { status: 500 });
  }
}
