pragma solidity ^0.8.0;

contract StudentContract {
    address admin;
    StudentData[] students;
    Course[] courses;
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
    }
    uint256 studentId;
    uint256 courseId;
    constructor() public {
        admin = msg.sender;
    }
    function addCourse(string memory courseName, uint256 courseFee) public {
        courseId++;
        require(msg.sender == admin);
        Course memory course = Course({
            id: courseId,
            name: courseName,
            fee: courseFee
        });
        courses.push(course);
    }

    function viewCourses() public view returns (Course[] memory) {
        return (courses);
    }
    function addStudent(string memory studentName, string memory _studentAddress,uint studentAge,uint studentNumber) public {
        // require(msg.sender == admin);
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
        require(msg.sender == admin);
        for (uint256 i = 0; i < students.length; i++) {
            if (students[i].id == _studentId) {
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
        returns (
            StudentData memory
        )
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
}