// Project data rendered by js/projects.js.
// width/height are the image's real pixel size, so the browser can reserve
// space for it before it loads.
export const projects = [
  {
    title: "Northeastern University Mars Rover",
    tags: ["Python", "ROS"],
    image: "img/projects/rover.jpg",
    width: 800,
    height: 600,
    alt: "Two Northeastern Mars rovers on a rocky desert hill",
    description: "Competed in URC 2025, URC 2026 and CIRC 2025.",
    url: "https://www.nurover.com",
  },
  {
    title: "Improving Monte Carlo Localization using Information Theory",
    tags: ["Python"],
    image: "img/projects/mcl.gif",
    width: 580,
    height: 152,
    alt: "Animation of a particle filter localizing a robot in three 2D maps",
    description:
      "An information-theoretic particle filter that reduces robot localization error by 15%.",
    url: "https://github.com/codeabiswas/brobot",
  },
  {
    title: "Visual Assist System for Indoor Navigation",
    tags: ["C++", "ROS"],
    image: "img/projects/voronoi.png",
    width: 3157,
    height: 2208,
    alt: "Plots of Voronoi-based paths planned around obstacles in indoor maps",
    description:
      "Voronoi-based path planning to guide visually impaired people indoors.",
    url: "https://github.com/k-rishabh/voronoi_pure_pursuit",
  },
  {
    title: "3D Object Segmentation on LiDAR Point Clouds",
    tags: ["Python", "PyTorch"],
    image: "img/projects/lidar.png",
    width: 2164,
    height: 1191,
    alt: "LiDAR point cloud with segmented objects shown in different colors",
    description:
      "Classifying objects in LiDAR point clouds with RANSAC, DBSCAN and PointNet.",
    url: "https://github.com/k-rishabh/pcd_segmentation",
  },
];
