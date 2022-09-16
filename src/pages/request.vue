<script lang="ts">
import API from '@/services';

const requestRes = async () => {
  let result = await API.login('zhangsan', '123456');
};
</script>
