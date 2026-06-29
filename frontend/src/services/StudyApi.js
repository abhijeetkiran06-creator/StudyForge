import api from "./api";

export async function getCourse() {
    const response = await api.get("/course");
    return response.data;
}