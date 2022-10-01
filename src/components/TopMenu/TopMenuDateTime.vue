<template>
  <div class="top-menu__datetime datetime">
    <div class="datetime__week-day">{{ toWeekDay }}</div>
    <div class="datetime__clock">{{ toDate }} | {{ toTime }}</div>
  </div>
</template>

<script>
export default {
  name: 'TopMenuDateTime',
  data() {
    return {
      toDate: '-',
      toTime: '-',
      toWeekDay: '-'
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function () {
      const today = new Date();
      const months = [
        'Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек'
      ];
      const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
      ];

      this.toDate = `${today.getDate()} ${months[today.getMonth()]}, ${today.getFullYear()}`;
      this.toTime = `${today.getHours()}:${today.getMinutes()}`;
      this.toWeekDay = days[today.getDay()];
    }
  }
};
</script>

<style lang="scss" scoped>
.top-menu__datetime {
  margin-left: auto;
  display: flex;
  flex-direction: column;
  .datetime {
    &__week-day {
      font-size: 14px;
    }
    &__clock {
      font-size: 12px;
    }
  }
}
</style>
