type UserType = {
    name: string;
    email: string;
    gender: string;
}

type AppointmentType = {
    userId: string;
    name: string;
    email: string;
    phoneNo: number;
    date: date;
    service: string;
    status: string;
    message: string;
}

type BlogType = {
    title: string;
    excerpt: string,
    image: string,
    paragraph: string,
}

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    gender: string;
    address: Address;
    hobbies: Hobby[];
    startDate: Date;
    subscribe: boolean;
    referral: string;
}
