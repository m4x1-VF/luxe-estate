export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  price: number;
  priceType: "sale" | "rent";
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  badge?: string;
}

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern Family Home",
    address: "123 Pine St",
    city: "Seattle",
    price: 850000,
    priceType: "sale",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuQ9M7U6euA6_cXmYuXnej-N5IuawAW8ds-4G1mzfqmiBc13qXsPhf9_j_zTB8gfEunrBHo8xMsxYwCw_pl8fsxbxRkmyvLR1N9Tiye5ZJG7fwlLn9MwyBanXYhE0emGwp59es1FEyQTRQbmXLUKO74Yj34ZHqrqIkOtMKhP8CmRFvfoHT5LAe10105vUhKNkxIBvtt530nfLigSUTemOOcJMVNmsgactntRJUwOBU_TZzND7BYtDklr8uZcNYlQOK5U74-ufIf-E",
  },
  {
    id: "2",
    title: "Urban Loft",
    address: "456 Elm Ave",
    city: "Portland",
    price: 3200,
    priceType: "rent",
    bedrooms: 1,
    bathrooms: 1,
    area: 85,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4zNatD3vePhIZAi6OHHJKmamYSgeBNSKjEt32tvkkf4s6aBXCF8R4LNfDfPa9leA0t6N1OKOcP358WwZrnosbCBxSM7EaY2_P7qkx3MinRgmHQn7RvleNTwy8cLigMoR3iv0u83chBVbZYI6BcNMcqv80W-l1pIUgIWZcDIXEqtUatrsojSGfM0lTNDZpkBntBUkRY6NB4ZUymYNYvTHXKbO8NZ6N6uoyuuHqcaRWKzHCNXkOR3p-_EVFAHR8QwijIY_m1mefPZ4",
    badge: "FOR RENT",
  },
  {
    id: "3",
    title: "Highland Retreat",
    address: "789 Mountain Rd",
    city: "Bend",
    price: 620000,
    priceType: "sale",
    bedrooms: 2,
    bathrooms: 2,
    area: 98,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuARQWC19e7mleUpjb8CWLztEv_svJeRFOaC2i-9r9GctFuX5Barzhfai9wNM1WW8bcGlqdFM32d3KPf7SItom5ijdHOz5rGGQPeT7PlWs8-y9LkfcsHLQqsLxalhxP94XJo76_mAMp7T2dVj3hPKHNzTDLLiS6ujSdSsyo3onxQthp4ZkVE8op92gyTLUUucaGaxO8vJvyhH3HuWB07EPqT1WsW0lr9Of5lUPonjG9eiqE1XiJXTqzXUZQt5JorfPwCO1MioZA_Zro",
  },
  {
    id: "4",
    title: "Sea View Penthouse",
    address: "321 Ocean Dr",
    city: "Miami",
    price: 4500,
    priceType: "rent",
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGq4Phm0uDzCnjHAsnWpYTBVpOds_M6iOsJuRQQA5eUZHkztGgtc7eh_OE6wBeyW1-iZh7yyhROnvvmqkAZ9tyAWFGXk0FG52zU4kZ_EDLA0U0cRszy7byNXTeWe0_hS53SYmtCTEV8Y1AM-WxiIC38UMa15QwFDjXtCGQOxoh35K0Ol_70vfsxm0VqDbaWkr8tcEbLTLy0NXH_GcpGK4lAXizgxYOIlFWGyau-4OIfPZRpjCBDbz_qu3VlN201UUJGiuM9ajVd-U",
    badge: "FOR RENT",
  },
  {
    id: "5",
    title: "Central Studio",
    address: "555 Main St",
    city: "Chicago",
    price: 550000,
    priceType: "sale",
    bedrooms: 1,
    bathrooms: 1,
    area: 50,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1w-Hb1289NqZKon3VK8bpmMiCDYYiAMT5egzTINo9m9wSZRHv-k-1IGTVoL1NT8YeZXJHa87JPNDIPrtrbP7jChHq0ypXF90uByhC6VA9O788_B4FY8JVg4chbWN9bcrn9-9FvVvfZX8Aj60Iqg_C8CsCA9DEnJqi2rJvzmK5UP5z-9XRTRjBneAPCa8iGgGWBD9yYKsziN6vn0ePBDGo3inieQtmbr46W31p6UfQ649XRxTm7ygOY2J-jxW1r0qWs8i97KGpkTE",
  },
  {
    id: "6",
    title: "Garden Villa",
    address: "999 Oak Ln",
    city: "Austin",
    price: 2800,
    priceType: "rent",
    bedrooms: 2,
    bathrooms: 2,
    area: 110,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfGXdY0g51ojSg0GMeTW9ndLY3mpKK3oMtWxo2nwd_dwi1pgn1Boi_ovaDGIFhUA7nwu3WdBch8ZuHxoHu3QfgM5ceAsp8pglRVyCROWNcy9zeDNP2wqLoevyKGcaEyFYHYpIx2KK46nLWthnHiHugmkKw48kJsL8IjMO1bL3T1Zwt8bvQDTTUHTgB3GqZ2RU2asRzF1jVg0rLw3LWXXTq0YF1CsbhlWpYOuCEpH5bB8zkBlbKXR4At_M46AL8rJqn5c6BrPD5PP8",
    badge: "FOR RENT",
  },
  {
    id: "7",
    title: "Casa Colonial",
    address: "789 Colonia St",
    city: "Córdoba",
    price: 750000,
    priceType: "sale",
    bedrooms: 4,
    bathrooms: 3,
    area: 160,
    imageUrl: "https://example.com/colonial.jpg"
  },
  {
    id: "8",
    title: "Loft Industrial",
    address: "321 Factory Ave",
    city: "Rosario",
    price: 4500,
    priceType: "rent",
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    imageUrl: "https://example.com/loft.jpg"
  },
  {
    id: "9",
    title: "Chalet de Montaña",
    address: "657 Peak Rd",
    city: "Bariloche",
    price: 950000,
    priceType: "sale",
    bedrooms: 5,
    bathrooms: 4,
    area: 250,
    imageUrl: "https://example.com/chalet.jpg"
  },
  {
    id: "10",
    title: "Departamento Centro",
    address: "123 Main St",
    city: "Mendoza",
    price: 3800,
    priceType: "rent",
    bedrooms: 2,
    bathrooms: 2,
    area: 80,
    imageUrl: "https://example.com/depto.jpg"
  },
  {
    id: "11",
    title: "Quinta con Parque",
    address: "456 Park Lane",
    city: "La Plata",
    price: 1100000,
    priceType: "sale",
    bedrooms: 6,
    bathrooms: 5,
    area: 350,
    imageUrl: "https://example.com/quinta.jpg"
  },
  {
    id: "12",
    title: "Studio Arte",
    address: "789 Art St",
    city: "Salta",
    price: 2200,
    priceType: "rent",
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    imageUrl: "https://example.com/studio.jpg"
  },
  {
    id: "13",
    title: "Puerto Deportivo",
    address: "321 Marina Blvd",
    city: "Ushuaia",
    price: 620000,
    priceType: "sale",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    imageUrl: "https://example.com/puerto.jpg"
  },
  {
    id: "14",
    title: "Casa de Campo",
    address: "654 Country Rd",
    city: "San Luis",
    price: 480000,
    priceType: "sale",
    bedrooms: 4,
    bathrooms: 3,
    area: 180,
    imageUrl: "https://example.com/campo.jpg"
  },
  {
    id: "15",
    title: "Penthouse Vista Mar",
    address: "987 Ocean View",
    city: "Mar del Plata",
    price: 5500,
    priceType: "rent",
    bedrooms: 3,
    bathrooms: 3,
    area: 200,
    imageUrl: "https://example.com/penthouse.jpg"
  },
  {
    id: "16",
    title: "Duplex Moderno",
    address: "111 Modern St",
    city: "Neuquén",
    price: 420000,
    priceType: "sale",
    bedrooms: 3,
    bathrooms: 2,
    area: 130,
    imageUrl: "https://example.com/duplex.jpg"
  }
 ];

export const featuredProperties: Property[] = [
  {
    id: "featured-1",
    title: "The Glass Pavilion",
    address: "Beverly Hills",
    city: "California",
    price: 5250000,
    priceType: "sale",
    bedrooms: 5,
    bathrooms: 4.5,
    area: 4200,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCra-FKp81t0_OM8bWD55m2o9OOSnR_v7D0UilyExMImxyIcr9tIMZ2Py3HcC0ra_MtSsBkduMcwxUNKI9_iSXFFr_YRON1SF9hNM3fcYy-uG7N7uusL0Z367WINi1V7_GwfNQx-gsbUqLtzVi4ivFyqFQGb4qBs79bALeSFb6i3_ZnJnI1VVrN-VeZYHjfYyQI5C6zy90N3uxWZpwzIBhNoUDKKQjQ8EOEYPoyPTzhnh6b6AS3dkkFJ8t4xSDC6qjhMrQUoUPnAeM",
    badge: "Exclusive",
  },
  {
    id: "featured-2",
    title: "Azure Heights Penthouse",
    address: "Downtown",
    city: "Vancouver",
    price: 3800000,
    priceType: "sale",
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDurAGHzg_fpQxFal-obkFVy1Q3WLPdueAQpz0itcQiRV-WfvulnBEDJbNeV8J06q4mX7PTtXYVJjX4-mHVr_khZLZxQ_s8f6fruGqzeqALyMu8wEHRK1EsOs9f4_jPmS7FxcdzrDkR88Wz0GjaPLXkTZRoJQfur59rxYRLi-WYcW-VU_gKS39CPLOMlftvqGvW0IOk5tXgst5mJ4WQM-ICN4vkdel9ido9YFUQga0OI10i6NSe5W4owt33-2YRi_b_ltdZW2QZC5s",
    badge: "New Arrival",
  },
];