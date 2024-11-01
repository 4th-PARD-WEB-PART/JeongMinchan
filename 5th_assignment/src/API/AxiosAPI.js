import axios from "axios";

const server = process.env.REACT_APP_API_URL;

// 여기서 중요한 점은 서버의 주소를 어떻게 완성하느냐입니다. 스웨거를 잘 확인하고 서버에게 어떻게 주소를 보낼 수 있을 지 생각해보세요.
// 템플릿 리터럴 (``) 을 이용해서 표현식을 잘 다룰 수 있도록 해봅시다.


//멤버의 정보를 불러옵니다
export const getMembersAPI = async (part) => {
    try {
        const response = await axios.get(`${server}/user?part=${part}`);

        console.log("user get data", response);

        return response;
    } catch (error) {
        console.error("Error fetching(part) user data:", error);
        throw error;
    }
};

//멤버의 정보를 추가합니다
export const postMemberAPI = async (data) => {
    try {
        const response = await axios.post(`${server}/user`, data);

        return response;
    } catch (error) {
        console.error("Error updating user data:", error);
        throw error;
    }
};


// 아래의 API는 클백세미나 때 진행할 예정입니다.

export const putMemberAPI = async (id, data) => {
    try {
        //your code here
        
    } catch (error) {
        console.error("Error updating user data:", error);
        throw error;
    }
};


export const deleteMemberAPI = async (id) => {
    try {
        //your code here

    } catch (error) {
        console.error("Error deleting user data:", error);
        throw error;
    }
};
