<template>
  <svg
    class="tick-icon"
    :class="customClass"
    width="24px"
    height="24px"
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>Icons / Check</title>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Selected-members" transform="translate(-932.000000, -462.000000)" fill="#FFFFFF">
        <g id="Pop-up" transform="translate(470.000000, 284.000000)">
          <g id="List" transform="translate(0.000000, 160.000000)">
            <g id="User-Item-/-Normal" transform="translate(20.000000, 0.000000)">
              <g id="User-Item/Atoms/CTA/Pending" transform="translate(436.000000, 12.000000)">
                <g id="Icons-/-Close" transform="translate(5.333333, 5.333333)">
                  <path
                    d="M11.5672594,1.26184897 C11.6835847,1.09969852 11.9093339,1.06254992 12.0714844,1.17887524 C12.2284042,1.29144813 12.2682567,1.50649918 12.1652372,1.66721553 L12.1544581,1.68310024 L4.70190197,12.0715118 C4.57586193,12.247204 4.32619729,12.2726206 4.16741269,12.1302306 L4.15279943,12.1163893 L1.21694399,9.1805339 C1.07583348,9.03942339 1.07583348,8.81063806 1.21694399,8.66952755 C1.35335081,8.53312073 1.57168489,8.52857383 1.71355353,8.65588687 L1.72795034,8.66952755 L4.36277426,11.3043383 L11.5672594,1.26184897 Z"
                    id="Path"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'TickIcon',
  props: {
    customClass: {
      type: String,
      default: '',
    },
  },
};
</script>
