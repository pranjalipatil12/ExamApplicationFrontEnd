import axios from 'axios';
let server="http://localhost:3000"
export let Login = async (email,password) => {
        let report=await axios.post(`${server}/login`,{email,password});
        return report.data;
}

export let AddExam=async(examName,totalMarks,passingMarks,course)=>{

          let report=await axios.post(`${server}/createExam`,{examName,totalMarks,passingMarks,course});
        return report.data;
}

export let viewExam=async()=>{

          let report=await axios.get(`${server}/viewAllExam`);
        return report.data;
}

export let deleteExam=async(id)=>{

          let report=await axios.delete(`${server}/deleteExamById/${id}`);
        return report.data;
}


export let UpdateExam = async (examid, examName, totalMarks, passingMarks, course) => {
    let report = await axios.put(`${server}/updateExamById`, { examid, examName, totalMarks, passingMarks, course });
    return report.data;
};
