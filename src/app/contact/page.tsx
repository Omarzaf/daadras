import React from "react";
import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaSquarePhone } from "react-icons/fa6";

function Contact() {
  return (
    <Box bg="white" pt="24">
      <Container
        px={{ base: "4", lg: "0" }}
        w={{ base: "full", lg: "1140px" }}
        maxW="1140px"
        my={{ base: "8", lg: "16" }}
      >
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          w="full"
          gap={{ base: "12", lg: "32" }}
        >
          <VStack alignItems="flex-start" w="full" spacing="9">
            <Heading color="steel-blue" fontSize={{ base: "3xl", lg: "4xl" }}>
              Contact Us
            </Heading>

            <HStack
              mt={{ base: "4", lg: "16" }}
              alignItems="center"
              spacing="6"
            >
              <Box color="sky-blue">
                <FaSquarePhone size={44} />
              </Box>
              <Text fontSize={{ base: "lg", lg: "xl" }} fontWeight="semibold">
                +92-332-0044001
              </Text>
            </HStack>
            <HStack alignItems="center" spacing="6">
              <Box color="sky-blue">
                <FaSquarePhone size={44} />
              </Box>
              <Text fontSize={{ base: "lg", lg: "xl" }} fontWeight="semibold">
                daadrasfoundation@gmail.com
              </Text>
            </HStack>
            <HStack alignItems="center" spacing="6">
              <Box color="sky-blue">
                <FaSquarePhone size={44} />
              </Box>
              <Text fontSize={{ base: "lg", lg: "xl" }} fontWeight="semibold">
                Flat 16, Block 2, B-Type Apartments, Shabbir Town, Lahore
              </Text>
            </HStack>
          </VStack>
          <svg
            width="86%"
            height="100%"
            viewBox="0 0 1518 1517"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M814.597 597.613C819.19 598.135 822.436 599.961 826.437 602.188C827.256 602.632 828.076 603.076 828.919 603.533C831.622 605.007 834.311 606.501 837 608C838.406 608.778 838.406 608.778 839.841 609.572C853.783 617.301 867.728 625.152 881 634C881 634.66 881 635.32 881 636C879.963 636.038 879.963 636.038 878.904 636.076C875.79 636.192 872.676 636.314 869.562 636.438C868.474 636.477 867.385 636.516 866.263 636.557C864.712 636.619 864.712 636.619 863.129 636.684C861.691 636.739 861.691 636.739 860.225 636.795C858.028 636.758 858.028 636.758 857 638C856.836 641.92 857.238 643.988 859.617 647.148C889.193 678.025 938.992 696.206 977.5 713.25C978.278 713.595 979.056 713.939 979.858 714.294C981.399 714.976 982.941 715.659 984.482 716.341C987.989 717.893 991.494 719.446 995 721C996.059 721.47 997.118 721.939 998.209 722.423C1018.77 731.607 1039.59 743.33 1048.87 765C1054.35 782.187 1047.43 802.4 1039.52 817.91C1031.53 831.338 1019.81 842.375 1008.87 853.375C1008.37 853.885 1007.87 854.395 1007.35 854.921C1000.58 861.741 993.544 868.036 986 874C984.757 875.013 983.516 876.029 982.277 877.047C952.076 901.584 918.495 921.359 885 941C883.373 941.956 883.373 941.956 881.713 942.931C847.823 962.803 812.909 980.822 777.312 997.438C776.216 997.951 775.12 998.464 773.99 998.993C760.622 1005.15 745.333 1011.93 730.437 1006.81C722.356 1002.55 717.775 997.159 714.836 988.617C697.106 928.539 727.149 847.759 750 792C732.272 800.116 716.969 811.493 702.617 824.629C700.501 826.546 698.36 828.417 696.199 830.281C691.939 834.001 687.923 837.928 683.937 841.938C683.269 842.602 682.601 843.267 681.912 843.951C677.988 847.882 674.251 851.922 670.623 856.127C668.303 858.804 665.903 861.398 663.5 864C659.852 867.96 656.256 871.958 652.726 876.023C649.2 880.06 645.597 884.027 642 888C641.194 888.893 640.388 889.785 639.558 890.705C633.322 897.567 626.925 904.232 620.355 910.775C618.799 912.326 617.248 913.882 615.697 915.439C610.816 920.324 605.89 925.107 600.639 929.597C598.556 931.38 596.566 933.254 594.562 935.125C574.112 953.512 549.715 970.537 523 978C522.19 978.245 521.381 978.49 520.547 978.742C504.403 982.863 485.333 980.759 470.687 972.938C465.051 969.429 460.832 965.007 456.472 960.062C454.234 957.763 454.234 957.763 451.64 957.934C448.139 959.348 444.929 961.146 441.687 963.062C434.286 967.322 426.799 971.289 419.101 974.986C417.707 975.659 416.316 976.34 414.929 977.029C382.645 993.023 346.56 1002.26 311 1007C310.23 1007.1 309.46 1007.21 308.667 1007.32C273.933 1011.43 230.863 1009.33 202 987.438C200.658 986.301 199.324 985.156 198 984C197.027 983.258 197.027 983.258 196.035 982.5C176.063 966.68 168.454 939.513 165.392 915.373C164.498 906.557 164.654 897.663 164.687 888.812C164.689 887.795 164.692 886.777 164.694 885.729C164.795 855.835 168.471 826.354 175.629 797.305C177.101 791.057 177.6 784.958 177.937 778.562C179.73 751.624 185.449 725.532 201 703C202.538 706.947 201.41 710.281 200.332 714.191C200.141 714.913 199.95 715.634 199.753 716.377C199.335 717.948 198.912 719.518 198.485 721.086C197.804 723.594 197.136 726.106 196.471 728.618C194.244 736.979 191.931 745.309 189.476 753.606C188.35 757.414 187.241 761.226 186.131 765.038C185.332 767.745 184.503 770.443 183.673 773.141C180.364 784.253 179.443 793.513 181 805C181.12 806.011 181.241 807.022 181.365 808.064C181.713 810.666 182.14 813.233 182.625 815.812C182.797 816.732 182.97 817.652 183.148 818.599C190.283 854.228 210.721 888.12 240.922 908.645C265.937 924.955 293.926 929.513 323.079 923.625C376.798 912.674 376.798 912.674 426 890C427.334 887.331 427.248 885.114 427.394 882.129C429.609 841.733 441.225 804.415 471.312 775.75C478.486 769.414 488.067 762 498 762C496.571 767.022 494.335 771.495 492.014 776.146C478.314 803.666 467.068 833.845 468 865C505.729 834.921 536.594 792.954 543 744C544.076 732.325 540.352 722.081 535.75 711.5C535.356 710.587 534.963 709.673 534.558 708.732C531.953 702.818 529.067 697.492 525.441 692.141C521.522 686.321 520.134 680.984 521 674C522.545 667.224 525.046 660.969 531 657C533.5 656.562 533.5 656.562 536 657C538.483 660.507 539.852 664.147 541.25 668.188C543.669 674.584 546.686 679.712 551 685C551.549 685.697 552.098 686.395 552.664 687.113C560.879 696.432 574.356 702.195 586.605 703.336C604.036 703.526 617.851 697.133 631 686C631.802 685.332 632.603 684.665 633.429 683.977C651.022 668.795 661.005 649.76 669.296 628.369C669.937 626.759 669.937 626.759 670.59 625.117C671.144 623.673 671.144 623.673 671.71 622.199C673 620 673 620 675.025 619.118C677 619 677 619 679 620C679.926 622.778 680.129 624.46 680.142 627.329C680.149 628.2 680.156 629.072 680.163 629.97C680.167 630.911 680.171 631.851 680.176 632.82C680.199 634.82 680.223 636.82 680.248 638.82C680.283 641.967 680.312 645.113 680.326 648.26C680.341 651.301 680.382 654.342 680.426 657.383C680.423 658.775 680.423 658.775 680.42 660.196C680.538 666.598 681.978 671.36 685 677C690.865 677.749 693.94 676.337 698.68 672.883C718.899 656.476 730.292 631.271 734.129 605.949C735 603 735 603 737.09 601.582C737.72 601.39 738.35 601.198 739 601C742.136 603.091 742.488 603.545 743.719 606.859C744.01 607.639 744.301 608.418 744.601 609.221C744.898 610.056 745.194 610.89 745.5 611.75C745.808 612.604 746.116 613.458 746.434 614.337C748.944 621.473 750.774 628.525 752 636C752.13 636.735 752.26 637.47 752.394 638.227C755.226 657.785 753.821 681.757 742.625 698.438C733.796 710.038 723.428 716.971 709 720C694.925 721.592 682.291 717.185 671.078 708.82C666.079 704.807 661.492 700.564 657 696C656.608 696.868 656.608 696.868 656.209 697.753C651.297 708.561 646.607 718.803 639 728C637.855 729.578 637.855 729.578 636.687 731.188C626.094 742.274 612.509 748.852 597.159 749.355C587.788 749.448 578.919 747.973 570 745C570.309 746.238 570.619 747.475 570.937 748.75C578.973 785.738 569.597 826.236 552 859C551.688 859.594 551.377 860.188 551.055 860.799C543.057 875.979 532.219 889.11 521 902C520.26 902.852 519.52 903.704 518.758 904.582C517.178 906.393 515.593 908.2 514 910C541.508 911.505 563.508 896.201 583.204 878.617C592.2 870.518 600.922 862.166 609.5 853.625C610.241 852.888 610.983 852.151 611.747 851.392C615.759 847.368 619.593 843.251 623.303 838.947C626.117 835.719 629.063 832.616 632 829.5C636.201 825.022 640.367 820.531 644.371 815.875C646.336 813.612 648.357 811.403 650.375 809.188C653.447 805.789 656.384 802.324 659.25 798.75C663.906 792.991 668.928 787.621 673.992 782.223C676.853 779.17 679.624 776.05 682.363 772.887C688.438 765.884 694.737 759.088 701.062 752.312C701.723 751.6 702.383 750.887 703.064 750.153C706.926 746.035 710.917 742.214 715.207 738.544C717.46 736.604 719.596 734.55 721.75 732.5C745.48 710.912 777.579 689 810.867 689C825.269 689.695 839.057 693.652 849.156 704.559C865.563 726.284 865.546 755.819 862.028 781.502C861.688 783.995 861.364 786.489 861.041 788.984C859.831 798.135 858.31 807.053 856 816C854.68 816 853.36 816 852 816C850.105 814.059 850.105 814.059 848.187 811.438C836.609 796.34 820.192 784.748 801 782C788.09 780.921 776.388 782.416 764 786C762.673 786.378 761.346 786.756 760.019 787.133C759.023 787.419 758.026 787.705 757 788C757.034 789.152 757.068 790.304 757.103 791.491C757.099 795.889 756.362 799.871 755.355 804.137C755.006 805.688 754.656 807.239 754.306 808.791C754.031 809.99 754.031 809.99 753.751 811.214C742.261 859.076 742.261 859.076 752.812 905.562C759.451 915.397 767.382 920.038 778.375 924.312C818.592 931.94 862.24 913.898 894.952 891.631C900.546 887.714 905.835 883.467 911 879C911.829 878.305 912.658 877.61 913.512 876.895C928.983 863.56 942.916 845.715 946 825C947.192 802.791 940.102 784.838 927 767C926.61 766.469 926.221 765.938 925.82 765.392C920.891 758.72 915.694 752.358 910.07 746.254C908.227 744.247 906.452 742.201 904.687 740.125C898.115 732.59 890.929 725.505 883.312 719.031C880.026 716.145 876.868 713.126 873.687 710.125C868.464 705.211 863.151 700.555 857.547 696.078C854.93 693.943 852.431 691.715 849.937 689.438C846.044 685.898 842.044 682.567 837.914 679.309C834.167 676.341 830.458 673.328 826.75 670.312C825.739 669.492 825.739 669.492 824.708 668.655C823.412 667.601 822.116 666.546 820.823 665.488C819.647 664.528 818.465 663.574 817.278 662.628C810.913 657.491 806.948 651.251 806 643C805.484 634.287 806.089 625.675 806.875 617C806.953 616.116 807.031 615.232 807.112 614.322C808.681 598.494 808.681 598.494 814.597 597.613Z"
              fill="#7FC7D9"
            />
            <path
              d="M1033 309C1035.84 312.361 1037.38 316.007 1038.93 320.07C1039.21 320.771 1039.48 321.473 1039.76 322.195C1040.66 324.502 1041.55 326.813 1042.44 329.125C1042.74 329.92 1043.05 330.714 1043.37 331.533C1051.46 352.515 1059.47 373.643 1065.75 395.25C1065.99 396.071 1066.23 396.892 1066.48 397.738C1067.64 401.935 1068.25 405.6 1068 410C1064.94 408.979 1061.89 407.959 1058.87 406.812C1055.89 405.968 1054.86 406.134 1052 407C1051.59 419.781 1052.56 431.434 1055.22 443.922C1055.56 445.582 1055.89 447.243 1056.23 448.905C1056.94 452.394 1057.66 455.881 1058.38 459.366C1060.09 467.554 1061.73 475.754 1063.38 483.953C1063.92 486.657 1064.47 489.36 1065.02 492.064C1081.33 572.908 1087.44 655.171 1092.75 737.355C1092.8 738.086 1092.85 738.816 1092.9 739.568C1093.75 753.122 1094.13 766.671 1094.11 780.25C1094.1 781.015 1094.1 781.779 1094.1 782.567C1094.08 805.263 1093.55 827.954 1093.07 850.644C1092.88 859.899 1092.69 869.155 1092.5 878.411C1092.44 881.587 1092.37 884.764 1092.3 887.94C1092.06 899.962 1091.94 911.975 1092 924C1093.35 924.031 1094.69 924.062 1096.04 924.093C1096.79 924.11 1097.54 924.127 1098.31 924.145C1140.23 924.987 1186.42 903.218 1216.3 874.637C1217.19 873.767 1218.08 872.896 1219 872C1219.86 871.202 1220.72 870.404 1221.61 869.582C1235.68 856.206 1247.64 838.445 1248.4 818.577C1248.88 785.786 1225.58 758.423 1204 736C1200.79 732.71 1197.56 729.444 1194.31 726.188C1193.52 725.387 1192.72 724.586 1191.9 723.762C1187.09 718.968 1182.14 714.426 1177 710C1175.39 708.546 1173.79 707.088 1172.19 705.625C1168.72 702.496 1165.19 699.495 1161.56 696.562C1157.74 693.469 1154.06 690.272 1150.44 686.938C1146.37 683.203 1142.21 679.683 1137.87 676.27C1134.16 673.337 1130.49 670.358 1126.81 667.375C1126.15 666.836 1125.48 666.298 1124.8 665.743C1122.86 664.169 1120.93 662.585 1119 661C1118.04 660.225 1118.04 660.225 1117.05 659.434C1109.3 653.059 1106.06 644.897 1105 635C1104.06 624.352 1106.04 614.195 1109 604C1109.18 603.32 1109.37 602.641 1109.56 601.94C1110.2 600.023 1110.2 600.023 1112 597C1115.04 595.632 1115.84 595.426 1119 596C1123.21 597.676 1127.07 599.875 1131 602.125C1132.14 602.759 1133.28 603.394 1134.46 604.047C1136.82 605.364 1139.18 606.691 1141.53 608.029C1144.79 609.881 1148.06 611.717 1151.33 613.547C1156.9 616.673 1162.45 619.831 1168 623C1169.51 623.863 1171.03 624.727 1172.54 625.59C1175.7 627.389 1178.85 629.193 1182 631C1182 631.99 1182 632.98 1182 634C1181.45 634.02 1180.89 634.04 1180.32 634.06C1177.8 634.156 1175.27 634.265 1172.75 634.375C1171.44 634.421 1171.44 634.421 1170.11 634.469C1169.26 634.507 1168.42 634.546 1167.55 634.586C1166.38 634.633 1166.38 634.633 1165.2 634.681C1162.73 635.04 1161.09 635.635 1159 637C1158.67 637.99 1158.34 638.98 1158 640C1176.6 675.807 1249.16 698.771 1284.26 714.211C1339.05 738.315 1339.05 738.315 1350.26 762.742C1355.02 775.024 1354.45 788.803 1349.2 800.828C1340.72 819.469 1328.62 834.755 1314.12 849.125C1313.21 850.049 1312.29 850.974 1311.35 851.926C1305.21 858.049 1298.78 863.605 1292 869C1290.68 870.085 1289.37 871.173 1288.06 872.266C1261.36 894.343 1231.85 913.487 1202 931C1200.97 931.604 1199.95 932.207 1198.89 932.829C1184.47 941.286 1169.9 949.423 1155.17 957.304C1152.38 958.795 1149.6 960.293 1146.83 961.796C1133.59 968.954 1120.3 975.972 1106.8 982.633C1106.02 983.022 1105.23 983.412 1104.42 983.813C1102.71 984.65 1101 985.468 1099.27 986.272C1098.38 986.696 1097.49 987.119 1096.57 987.555C1095.77 987.928 1094.96 988.302 1094.13 988.687C1091.66 990.21 1090.55 991.547 1089 994C1088.51 996.283 1088.51 996.283 1088.51 998.76C1088.47 999.71 1088.44 1000.66 1088.41 1001.64C1088.37 1003.18 1088.37 1003.18 1088.34 1004.76C1088.31 1005.84 1088.27 1006.93 1088.23 1008.04C1088.16 1010.37 1088.09 1012.71 1088.03 1015.04C1087.9 1019.95 1087.74 1024.85 1087.58 1029.76C1087.5 1032.24 1087.43 1034.73 1087.35 1037.22C1085.34 1101.83 1085.34 1101.83 1080 1125C1077.11 1122.11 1077.06 1118.81 1076.47 1114.91C1076.34 1114.07 1076.21 1113.23 1076.08 1112.37C1074.51 1101.42 1073.99 1090.41 1073.44 1079.38C1073.31 1077.07 1073.19 1074.77 1073.07 1072.47C1071.82 1048.99 1070.87 1025.5 1070 1002C1066.74 1002.63 1063.69 1003.38 1060.56 1004.5C1050.49 1007.88 1039.95 1008.7 1030.12 1004.19C1022.02 999.634 1018.26 991.49 1015.75 982.938C1002.03 932.94 1024.51 869.196 1040.19 821.75C1040.55 820.652 1040.55 820.652 1040.91 819.532C1043.53 811.601 1046.38 803.815 1049.68 796.141C1049.96 795.467 1050.25 794.794 1050.54 794.1C1051.96 790.882 1053.24 788.248 1056 786C1056.99 786.33 1057.98 786.66 1059 787C1058.58 795.686 1057.08 803.931 1055.1 812.378C1050.82 830.811 1047.78 848.453 1047.62 867.438C1047.61 868.67 1047.6 869.903 1047.58 871.172C1047.65 884.38 1049.38 900.021 1058.94 910.035C1059.66 910.743 1060.38 911.452 1061.12 912.182C1061.85 912.898 1062.57 913.615 1063.32 914.352C1064.15 915.168 1064.15 915.168 1065 916C1065.28 892.094 1064.56 868.326 1063.32 844.454C1063.1 840.225 1062.89 835.995 1062.69 831.766C1062.29 823.748 1061.87 815.732 1061.45 807.716C1061.2 802.799 1060.94 797.883 1060.69 792.966C1058.52 749.983 1055.79 707.04 1052.99 664.094C1052.75 660.347 1052.51 656.6 1052.26 652.853C1048.18 589.876 1043.91 526.919 1039 464C1038.93 463.145 1038.87 462.291 1038.8 461.41C1037.93 450.251 1037.04 439.093 1036.12 427.938C1036.03 426.731 1035.93 425.525 1035.83 424.283C1034.98 404.174 1034.98 404.174 1029 385.312C1028.39 384.148 1027.78 382.984 1027.15 381.785C1025.62 379.03 1023.99 376.353 1022.32 373.684C1021.86 372.946 1021.4 372.209 1020.94 371.45C1020.05 370.024 1019.13 368.61 1018.2 367.212C1014.83 361.83 1014.04 357.295 1015 351C1015.9 347.849 1017.17 344.962 1018.56 342C1019.3 340.353 1020.03 338.704 1020.77 337.055C1021.14 336.223 1021.51 335.391 1021.9 334.534C1023.99 329.719 1025.82 324.795 1027.65 319.875C1029.13 315.994 1030.72 312.497 1033 309Z"
              fill="#7FC7D9"
            />
          </svg>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Contact;
