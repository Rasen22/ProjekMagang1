export interface UserDto {
    id: string;
    email: string;
    name: string;
    createdAt: string;
}
export interface PostDto {
    id: string;
    authorId: string;
    title: string;
    content: string;
    createdAt: string;
}
