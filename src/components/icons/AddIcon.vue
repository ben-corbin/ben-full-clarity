<template>
  <svg
    class="add-icon"
    :class="customClass"
    width="14px"
    height="14px"
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>Icons / Add</title>
    <g id="Page-1" stroke="none" stroke-width="1" fill="" fill-rule="evenodd">
      <g id="Selected-members" transform="translate(-932.000000, -524.000000)" fill="#FFFFFF">
        <g id="Pop-up" transform="translate(470.000000, 284.000000)">
          <g id="List" transform="translate(0.000000, 160.000000)">
            <g id="User-Item-/-Normal" transform="translate(20.000000, 62.000000)">
              <g id="User-Item/Atoms/CTA/Pending" transform="translate(436.000000, 12.000000)">
                <g id="Icons-/-Close" transform="translate(5.333333, 5.333333)">
                  <path
                    d="M6.66666667,1.11111111 C6.86837998,1.11111111 7.03305827,1.26967688 7.04285355,1.46896042 L7.0433145,1.48775895 L7.0433145,6.29001883 L11.8455744,6.29001883 C12.0535912,6.29001883 12.2222222,6.45864981 12.2222222,6.66666667 C12.2222222,6.86837998 12.0636565,7.03305827 11.8643729,7.04285355 L11.8455744,7.0433145 L7.0433145,7.0433145 L7.0433145,11.8455744 C7.0433145,12.0535912 6.87468352,12.2222222 6.66666667,12.2222222 C6.46495335,12.2222222 6.30027506,12.0636565 6.29047978,11.8643729 L6.29001883,11.8455744 L6.29001883,7.0433145 L1.48775895,7.0433145 C1.27974209,7.0433145 1.11111111,6.87468352 1.11111111,6.66666667 C1.11111111,6.46495335 1.26967688,6.30027506 1.46896042,6.29047978 L1.48775895,6.29001883 L6.29001883,6.29001883 L6.29001883,1.48775895 C6.29001883,1.27974209 6.45864981,1.11111111 6.66666667,1.11111111 Z"
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
  name: 'AddIcon',
  props: {
    customClass: {
      type: String,
      default: '',
    },
  },
};
</script>
