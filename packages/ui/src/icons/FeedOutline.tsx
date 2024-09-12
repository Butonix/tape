import type { SVGProps } from "react";
import React from "react";

export const FeedOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.69934 0.250007C7.71302 0.250011 7.72689 0.250015 7.74097 0.250015H14.2588C14.2728 0.250015 14.2867 0.250011 14.3004 0.250007C14.5202 0.249948 14.6888 0.249902 14.8362 0.265715C16.1903 0.411039 17.2268 1.52305 17.2897 2.87008C18.5324 3.24111 19.4024 4.4249 19.3416 5.75728C19.7401 5.93704 20.0929 6.18502 20.3948 6.5298C21.0112 7.23385 21.1994 8.09539 21.2067 9.10064C21.2136 10.0723 21.0497 11.3015 20.8454 12.8337L20.4309 15.9422C20.2712 17.1401 20.142 18.1096 19.941 18.8688C19.7319 19.659 19.423 20.3141 18.8436 20.8215C18.2641 21.3288 17.5739 21.5483 16.763 21.6512C15.9839 21.75 15.0058 21.75 13.7974 21.75H8.20247C6.99402 21.75 6.01592 21.75 5.23686 21.6512C4.42593 21.5483 3.73571 21.3288 3.15625 20.8215C2.57679 20.3141 2.26798 19.659 2.05881 18.8688C1.85786 18.1096 1.72861 17.1401 1.56891 15.9422L1.15444 12.8337C0.95013 11.3015 0.786209 10.0723 0.793183 9.10064C0.800399 8.09539 0.988621 7.23385 1.60503 6.5298C1.90689 6.18502 2.25976 5.93703 2.65819 5.75728C2.59746 4.42494 3.46737 3.24117 4.71004 2.87011C4.77292 1.52306 5.80941 0.41104 7.16358 0.265715C7.31093 0.249902 7.47949 0.249948 7.69934 0.250007ZM6.23209 2.75001H15.7676C15.6611 2.22633 15.2263 1.8162 14.6761 1.75715C14.6198 1.75111 14.5396 1.75001 14.2588 1.75001H7.74097C7.46012 1.75001 7.37992 1.75111 7.32363 1.75715C6.77343 1.8162 6.33861 2.22633 6.23209 2.75001ZM4.18083 5.36744C5.12317 5.24998 6.3196 5.24999 7.7941 5.25001H14.2057C15.6802 5.24999 16.8767 5.24998 17.819 5.36744C17.6969 4.74074 17.1452 4.25001 16.4618 4.25001H5.53801C4.85464 4.25001 4.30291 4.74074 4.18083 5.36744ZM4.25493 6.87068C3.43054 6.98663 3.01357 7.19811 2.7336 7.51788C2.45363 7.83766 2.29912 8.27892 2.29314 9.1114C2.28702 9.96519 2.43518 11.0897 2.64907 12.6939L3.04907 15.6939C3.21706 16.9538 3.33511 17.8285 3.50887 18.4849C3.67721 19.1209 3.87533 19.4574 4.14434 19.6929C4.41335 19.9284 4.77307 20.0803 5.42568 20.1631C6.09932 20.2486 6.98194 20.25 8.25302 20.25H13.7468C15.0179 20.25 15.9005 20.2486 16.5742 20.1631C17.2268 20.0803 17.5865 19.9284 17.8555 19.6929C18.1245 19.4574 18.3226 19.1209 18.491 18.4849C18.6647 17.8285 18.7828 16.9538 18.9508 15.6939L19.3508 12.6939C19.5647 11.0897 19.7128 9.96519 19.7067 9.1114C19.7007 8.27892 19.5462 7.83766 19.2662 7.51788C18.9863 7.19811 18.5693 6.98663 17.7449 6.87068C16.8994 6.75177 15.7652 6.75001 14.1468 6.75001H7.85302C6.23464 6.75001 5.10042 6.75177 4.25493 6.87068ZM11.5387 9.97939C11.5572 9.98919 11.5756 9.99903 11.5942 10.0089C11.8809 10.1615 12.1641 10.3201 12.4187 10.4766C12.7087 10.6548 13.0181 10.8647 13.3233 11.0826C13.3396 11.0942 13.3558 11.1058 13.3721 11.1174C13.8675 11.4709 14.3167 11.7914 14.6321 12.1129C14.9908 12.4784 15.2499 12.9166 15.2499 13.5C15.2499 14.0835 14.9908 14.5217 14.6321 14.8872C14.3167 15.2087 13.8675 15.5292 13.3721 15.8827C13.3558 15.8943 13.3396 15.9059 13.3233 15.9175C13.0181 16.1354 12.7087 16.3453 12.4187 16.5235C12.1641 16.6799 11.8809 16.8386 11.5942 16.9912C11.5756 17.0011 11.5572 17.0109 11.5388 17.0207C11.0507 17.2805 10.5957 17.5227 10.2002 17.647C9.74058 17.7915 9.23176 17.8186 8.74058 17.496C8.27054 17.1873 8.0697 16.725 7.9665 16.259C7.87202 15.8324 7.83609 15.2879 7.79557 14.6739L7.79193 14.6189C7.76656 14.2349 7.74992 13.8507 7.74992 13.5C7.74992 13.1494 7.76656 12.7651 7.79193 12.3812L7.79557 12.3261C7.83609 11.7122 7.87202 11.1677 7.9665 10.7411C8.0697 10.2751 8.27054 9.81282 8.74058 9.50408C9.23176 9.18145 9.74059 9.20857 10.2002 9.35304C10.5957 9.47736 11.0507 9.71956 11.5387 9.97939ZM9.57928 10.7501C9.57867 10.7498 9.57737 10.7491 9.56409 10.7578C9.5636 10.7581 9.56301 10.7585 9.56232 10.7589C9.54771 10.7678 9.48902 10.8035 9.43101 11.0655C9.36436 11.3664 9.33401 11.794 9.28867 12.4801C9.2646 12.8442 9.24992 13.1933 9.24992 13.5C9.24992 13.8068 9.2646 14.1559 9.28867 14.52C9.33401 15.206 9.36436 15.6337 9.43101 15.9346C9.48902 16.1966 9.54771 16.2323 9.56232 16.2412C9.56301 16.2416 9.5636 16.242 9.56409 16.2423C9.57954 16.2524 9.57877 16.2498 9.57958 16.2498C9.59163 16.2506 9.64032 16.2507 9.75038 16.2161C9.99638 16.1388 10.3262 15.9667 10.8896 15.667C11.1592 15.5235 11.4135 15.3806 11.6334 15.2455C11.8843 15.0913 12.1635 14.9024 12.4518 14.6966C13.0121 14.2967 13.3498 14.0523 13.5615 13.8366C13.7403 13.6544 13.7499 13.5727 13.7499 13.5C13.7499 13.4274 13.7403 13.3457 13.5615 13.1635C13.3498 12.9478 13.0121 12.7033 12.4518 12.3034C12.1635 12.0976 11.8843 11.9088 11.6334 11.7546C11.4135 11.6195 11.1592 11.4765 10.8896 11.3331C10.3262 11.0333 9.99638 10.8613 9.75038 10.784C9.64032 10.7494 9.59133 10.7494 9.57928 10.7501C9.57938 10.7502 9.57917 10.7501 9.57928 10.7501Z"
      fill="currentColor"
    />
  </svg>
);
