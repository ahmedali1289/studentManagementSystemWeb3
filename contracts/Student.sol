pragma solidity ^0.8.0;

contract StudentContract {
    address admin;
    StudentData[] students;
    Course[] courses;
    mapping(uint256 => uint256) public studentPayments;
    struct StudentData {
        string name;
        string studentaddress;
        uint256 age;
        uint256 number;
        uint256 id;
        uint256[] courses;
        uint256[] grades;
        uint256[] attendance;
    }
    struct Course {
        uint256 id;
        string name;
        uint256 fee;
        bool feePaid;
    }
    uint256 studentId;
    uint256 courseId;

    constructor() public {
        admin = msg.sender;
    }

    function addCourse(string memory courseName, uint256 courseFee) public {
        uint256 existingId;
        for (uint256 i = 0; i < courses.length; i++) {
            if (
                keccak256(abi.encodePacked(courses[i].name)) ==
                keccak256(abi.encodePacked(courseName))
            ) {
                existingId = courses[i].id;
                require(
                    courses[i].fee != courseFee,
                    "you already have this course and if you want to update it's fees then change it's fees."
                );
                break;
            }
        }
        if (existingId != 0) {
            for (uint256 i = 0; i < courses.length; i++) {
                if (courses[i].id == existingId) {
                    courses[i].fee = courseFee;
                    return;
                }
            }
        } else {
            courseId++;
            Course memory course = Course({
                id: courseId,
                name: courseName,
                fee: courseFee,
                feePaid: false
            });
            courses.push(course);
        }
    }

    function viewCourses() public view returns (Course[] memory) {
        return (courses);
    }

    function addStudent(
        string memory studentName,
        string memory _studentAddress,
        uint256 studentAge,
        uint256 studentNumber
    ) public {
        studentId++;
        StudentData memory studentData = StudentData({
            id: studentId,
            name: studentName,
            studentaddress: _studentAddress,
            age: studentAge,
            number: studentNumber,
            courses: new uint256[](0),
            grades: new uint256[](0),
            attendance: new uint256[](0)
        });
        students.push(studentData);
    }

    function assignCourse(uint256 _studentId, uint256 courseId) public {
        for (uint256 i = 0; i < students.length; i++) {
            if (students[i].id == _studentId) {
                for (uint256 j = 0; j < students[i].courses.length; j++) {
                    if (students[i].courses[j] == courseId) {
                        require(
                            false,
                            "Course already assigned to the student"
                        );
                    }
                }
                students[i].courses.push(courseId);
                students[i].grades.push(0);
                students[i].attendance.push(0);
            }
        }
    }

    function addGrades(
        uint256 _studentId,
        uint256 grade,
        uint256 courseIndex
    ) public {
        require(msg.sender == admin);
        for (uint256 i = 0; i < students.length; i++) {
            if (students[i].id == _studentId) {
                require(courseIndex < students[i].courses.length);
                students[i].grades[courseIndex] = grade;
            }
        }
    }

    function markAttendance(
        uint256 _studentId,
        uint256 _attendance,
        uint256 courseIndex
    ) public {
        require(msg.sender == admin);
        for (uint256 i = 0; i < students.length; i++) {
            if (students[i].id == _studentId) {
                require(courseIndex < students[i].courses.length);
                students[i].attendance[courseIndex] = _attendance;
            }
        }
    }

    function getAllStudents() public view returns (StudentData[] memory) {
        return students;
    }

    function getStudent(uint256 studentId)
        public
        view
        returns (StudentData memory)
    {
        for (uint256 i = 0; i < students.length; i++) {
            if (students[i].id == studentId) {
                StudentData memory studentData = StudentData({
                    id: students[i].id,
                    name: students[i].name,
                    studentaddress: students[i].studentaddress,
                    age: students[i].age,
                    number: students[i].number,
                    courses: students[i].courses,
                    grades: students[i].grades,
                    attendance: students[i].attendance
                });
                return (studentData);
            }
        }
    }

    function getAssignedCourses(uint256 studentId)
        public
        view
        returns (uint256[] memory)
    {
        for (uint256 i = 0; i < students.length; i++) {
            if (students[i].id == studentId) {
                return (students[i].courses);
            }
        }
    }

    function getAssignedCoursesWithGrades(uint256 studentId)
        public
        view
        returns (uint256[] memory, uint256[] memory)
    {
        for (uint256 i = 0; i < students.length; i++) {
            if (students[i].id == studentId) {
                return (students[i].courses, students[i].grades);
            }
        }
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function checkTotalFee(uint256 studentId) public view returns (uint256) {
        uint256 totalFee = 0;
        for (uint256 i = 0; i < students.length; i++) {
            if (students[i].id == studentId) {
                for (uint256 j = 0; j < students[i].courses.length; j++) {
                    totalFee += courses[i].fee;
                }
            }
        }
        return totalFee;
    }

    function payCoursesFees() public payable {
        uint256 totalFee = 0;
        for (uint256 i = 0; i < students.length; i++) {
            if (students[i].id == studentId) {
                for (uint256 j = 0; j < students[i].courses.length; j++) {
                    uint256 courseId = students[i].courses[j];
                    for (uint256 k = 0; k < courses.length; k++) {
                        if (courses[k].id == courseId) {
                            totalFee += courses[k].fee;
                        }
                    }
                }
            }
        }
        require(msg.value == totalFee, "Incorrect fee amount");
        for (uint256 i = 0; i < students.length; i++) {
            if (students[i].id == studentId) {
                for (uint256 j = 0; j < students[i].courses.length; j++) {
                    uint256 courseId = students[i].courses[j];
                    for (uint256 k = 0; k < courses.length; k++) {
                        if (courses[k].id == courseId) {
                            courses[k].feePaid = true;
                        }
                    }
                }
            }
        }
    }
}
