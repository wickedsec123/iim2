"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function Result() {
  const [rollNumber, setRollNumber] = useState("");
  const [college, setCollege] = useState("");
  const [status, setStatus] = useState("");

  const handleCheckStatus = () => {
    let result = "";
    switch (college) {
      case "Ahmedabad":
        result = "waiting : 5";
        break;
      case "Bangalore":
        result = "waiting : 4";
        break;
      case "Calcutta":
        result = "waiting : 15";
        break;
      case "Lucknow":
        result = "Rejected";
        break;
      case "Kozhikode":
        result = "waiting : 9";
        break;
      case "Indore":
        result = "N/A";
        break;
      case "Amritsar":
        result = "Selected";
        break;
      case "Shillong":
        result = "N/A";
        break;
      case "Rohtak":
        result = "N/A";
        break;
      case "Raipur":
        result = "N/A";
        break;
      case "Ranchi":
        result = "N/A";
        break;
      case "Mumbai":
        result = "Selected";
        break;
      case "others":
        result = "N/A";
        break;
      default:
        result = "";
    }
    setStatus(result);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Check Student Status</CardTitle>
          <CardDescription>
            Enter your details to check your status.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="rollno">Roll Number</Label>
            <Input
              id="rollno"
              type="number"
              placeholder="Enter your roll number"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="college">College</Label>
            <Select value={college} onValueChange={setCollege}>
              <SelectTrigger>
                <SelectValue placeholder="Select your college" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Ahmedabad">IIM Ahmedabad</SelectItem>
                <SelectItem value="Bangalore">IIM Bangalore</SelectItem>
                <SelectItem value="Calcutta">IIM Calcutta</SelectItem>
                <SelectItem value="Lucknow">IIM Lucknow</SelectItem>
                <SelectItem value="Kozhikode">IIM Kozhikode</SelectItem>
                <SelectItem value="Indore">IIM Indore</SelectItem>
                <SelectItem value="Amritsar">IIM Amritsar</SelectItem>
                <SelectItem value="Shillong">IIM Shillong</SelectItem>
                <SelectItem value="Rohtak">IIM Rohtak</SelectItem>
                <SelectItem value="Raipur">IIM Raipur</SelectItem>
                <SelectItem value="Ranchi">IIM Ranchi</SelectItem>
                <SelectItem value="Mumbai">IIM Mumbai</SelectItem>
                <SelectItem value="others">others</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button type="button" onClick={handleCheckStatus}>
            Check Status
          </Button>
        </CardFooter>
      </Card>
      {status && (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Student Status</CardTitle>
            <CardDescription>
              Here is the result of your status check.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Roll Number:</div>
              <div>{rollNumber}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-semibold">Name : </div>
              <div className="font-semibold">Omkar Vihang Gawde</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-semibold">College:</div>
              <div>{college}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-semibold">Status:</div>
              <div
                className={
                  status.includes("waiting")
                    ? "text-yellow-500 font-semibold"
                    : "text-green-500 font-semibold"
                }
              >
                {status}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
