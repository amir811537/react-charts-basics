import { LineChart, Line,XAxis,YAxis, Tooltip } from 'recharts';
const StudentCharts = () => {

    const subjectMarks = [
        { name: "Student 1", mathScore: 85, accountingMark: 75, financeMark: 66 },
        { name: "Student 2", mathScore: 92, accountingMark: 88, financeMark: 78 },
        { name: "Student 3", mathScore: 66, accountingMark: 85, financeMark: 92 },
        { name: "Student 4", mathScore: 95, accountingMark: 31, financeMark: 89 },
        { name: "Student 5", mathScore: 40, accountingMark: 79, financeMark: 85 },
        { name: "Student 6", mathScore: 76, accountingMark: 82, financeMark: 77 },
        { name: "Student 7", mathScore: 89, accountingMark: 90, financeMark: 93 },
        { name: "Student 8", mathScore: 93, accountingMark: 88, financeMark: 90 },
        { name: "Student 9", mathScore: 70, accountingMark: 77, financeMark: 82 },
        { name: "Student 10", mathScore: 87, accountingMark: 86, financeMark: 50 },
      ];
      



    return (
        <div className='text-center'>
        <div className='flex justify-center items-center h-screen'>
          {/* Centered content */}
          <LineChart width={500} height={400} data={subjectMarks}>
            <XAxis dataKey="name" />
            <YAxis dataKey="" />
  <Tooltip></Tooltip>
            <Line stroke='green' dataKey={"mathScore"} />
            <Line stroke="red" dataKey={"accountingMark"} />
            <Line stroke='yellow' dataKey={"financeMark"} />
          </LineChart>
        </div>
      </div>
    );
};

export default StudentCharts;