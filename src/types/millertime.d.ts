declare namespace MillerTime {
    export interface User {
        Id: number;
        UserName: string;
        Email: string;
        IsAdmin: boolean;
    }

    export interface Video {
        Id: number;
        UserId: number;
        YoutubeVideoId: string;
        IsApproved: boolean;
    }
}