export class TodoEntity {
    public id: number | undefined;
    public completed: boolean = false;
    public text: string | null = null;
    public clientId: string | null = null;
}