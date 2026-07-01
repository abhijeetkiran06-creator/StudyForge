import api from "./api";

export async function getCourse() {
    const response = await api.get("/course");
    return response.data;
}

export async function getSummary(topic) {
    const response = await api.post("/summary", { topic });
    return response.data;
}

export async function getFlashcards(topic) {
    const response = await api.post("/flashcards", { topic });
    return response.data;
}