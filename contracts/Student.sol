pragma solidity ^0.8.0;

contract StudentContract {
    address admin;
    StudentData[] students;
    struct StudentData {
        string name;
        string studentaddress;
        uint256 age;
        uint256 number;
        uint256 id;
        string[] courses;
        uint256[] grades;
        uint256[] attendance;
    }
    uint256 studentId;

    constructor() public {
        admin = msg.sender;
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
            courses: new string[](0),
            grades: new uint256[](0),
            attendance: new uint256[](0)
        });
        students.push(studentData);
    }

    function assignCourse(uint256 _studentId, string memory course) public {
        require(msg.sender == admin);
        for (uint256 i = 0; i < students.length; i++) {
            if (students[i].id == _studentId) {
                students[i].courses.push(course);
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
            uint256,
            string memory,
            string memory,
            uint256,
            uint256,
            string[] memory,
            uint256[] memory,
            uint256[] memory
        )
    {
        for (uint256 i = 0; i < students.length; i++) {
            if (students[i].id == studentId) {
                return (
                    students[i].id,
                    students[i].name,
                    students[i].studentaddress,
                    students[i].age,
                    students[i].number,
                    students[i].courses,
                    students[i].grades,
                    students[i].attendance
                );
            }
        }
    }

    function getAssignedCoursesWithGrades(uint256 studentId)
        public
        view
        returns (string[] memory, uint256[] memory)
    {
        for (uint256 i = 0; i < students.length; i++) {
            if (students[i].id == studentId) {
                return (students[i].courses, students[i].grades);
            }
        }
    }
}
