import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
};

export async function getUsers(): Promise<User[]> {
  const { data: fetchData } = await api.get('users');

  return fetchData.users.map((user: User) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });
}

export function useUsers(){
  return useQuery('users', getUsers,{
      staleTime: 1000 * 5, // 5 seconds
    });
}
