import api from "./api";

export async function extractTopics() {
    const response = await api.post("/extract-topics");
    return response.data;
}

export async function getCourse() {
    const response = await api.get("/course");
    return response.data;
}