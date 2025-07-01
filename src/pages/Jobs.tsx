
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, MapPin, Clock, DollarSign, Users } from "lucide-react";

const jobPositions = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    applicants: 24,
    status: "Active",
    postedDate: "2024-06-15",
    description: "We're looking for a Senior Frontend Developer to join our engineering team...",
    requirements: ["5+ years React experience", "TypeScript", "Next.js"]
  },
  {
    id: 2,
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    applicants: 18,
    status: "Active",
    postedDate: "2024-06-20",
    description: "Join our marketing team to drive product adoption and growth...",
    requirements: ["3+ years marketing experience", "B2B SaaS", "Analytics"]
  },
  {
    id: 3,
    title: "Sales Development Representative",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    salary: "$60,000 - $80,000",
    applicants: 31,
    status: "Active",
    postedDate: "2024-06-10",
    description: "Generate qualified leads and support the sales team...",
    requirements: ["1+ years sales experience", "CRM proficiency", "Communication skills"]
  },
  {
    id: 4,
    title: "UX/UI Designer",
    department: "Design",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$85,000 - $110,000",
    applicants: 12,
    status: "Draft",
    postedDate: "2024-06-25",
    description: "Create beautiful and intuitive user experiences...",
    requirements: ["3+ years design experience", "Figma", "User research"]
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    applicants: 8,
    status: "Active",
    postedDate: "2024-06-22",
    description: "Build and maintain our cloud infrastructure...",
    requirements: ["AWS/Azure", "Kubernetes", "CI/CD pipelines"]
  },
  {
    id: 6,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$75,000 - $95,000",
    applicants: 19,
    status: "Paused",
    postedDate: "2024-06-05",
    description: "Ensure customer satisfaction and drive retention...",
    requirements: ["Customer success experience", "SaaS background", "Communication skills"]
  }
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const statuses = ["All", "Active", "Draft", "Paused"];

  const filteredJobs = jobPositions.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "All" || job.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Draft":
        return "bg-gray-100 text-gray-800";
      case "Paused":
        return "bg-yellow-100 text-yellow-800";
      case "Closed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-blue-100 text-blue-800";
      case "Part-time":
        return "bg-purple-100 text-purple-800";
      case "Contract":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Job Positions</h1>
          <p className="text-gray-600 mt-2">Manage open positions and track applications</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Post New Job
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Positions</p>
                <p className="text-2xl font-bold text-gray-900">{jobPositions.length}</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Jobs</p>
                <p className="text-2xl font-bold text-gray-900">
                  {jobPositions.filter(j => j.status === "Active").length}
                </p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Applicants</p>
                <p className="text-2xl font-bold text-gray-900">
                  {jobPositions.reduce((sum, job) => sum + job.applicants, 0)}
                </p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Applications</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(jobPositions.reduce((sum, job) => sum + job.applicants, 0) / jobPositions.length)}
                </p>
              </div>
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search job positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {statuses.map((status) => (
                <Button
                  key={status}
                  variant={selectedStatus === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStatus(status)}
                  className={selectedStatus === status ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Jobs List */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-gray-600 mb-2">{job.description}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Badge className={getStatusColor(job.status)}>
                        {job.status}
                      </Badge>
                      <Badge className={getTypeColor(job.type)}>
                        {job.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2 min-w-[120px]">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{job.applicants}</div>
                    <div className="text-sm text-gray-600">Applicants</div>
                  </div>
                  <Button size="sm" variant="outline">
                    View Applications
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Jobs;
