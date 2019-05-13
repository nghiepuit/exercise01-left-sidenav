export const routes = [
  {
    to: "/",
    text: "Dashboard"
  },
  {
    to: "/don-hang",
    text: "Đơn hàng",
    children: [
      {
        to: "/doi-xuat-don-hang",
        text: "Đối xuất đơn hàng",
      },
      {
        to: "/xuat-ky-thanh-toan",
        text: "Xuất kỳ thanh toán",
      }
    ]
  },
  {
    to: "/commision",
    text: "Commision"
  },
];
