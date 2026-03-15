<script setup>
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const schema = toTypedSchema(
  z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })
);

const { handleSubmit, errors, defineField } = useForm({
  validationSchema: schema,
});

const [email] = defineField("email");
const [password] = defineField("password");

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <div class="flex items-center justify-center">
    <form
      @submit="onSubmit"
      class="w-full max-w-sm bg-white p-8 rounded-xl shadow-md space-y-6"
    >
      <h2 class="text-2xl font-semibold text-center text-gray-800">Login</h2>

      <!-- Email -->
      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700"> Email </label>
        <Input
          v-model="email"
          type="email"
          placeholder="you@example.com"
          class="w-full"
        />
        <span v-if="errors.email" class="text-sm text-red-500">
          {{ errors.email }}
        </span>
      </div>

      <!-- Password -->
      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700"> Password </label>
        <Input
          type="password"
          v-model="password"
          placeholder="••••••••"
          class="w-full"
        />
        <span v-if="errors.password" class="text-sm text-red-500">
          {{ errors.password }}
        </span>
      </div>

      <!-- Submit -->
      <Button type="submit" class="w-full"> Submit </Button>
    </form>
  </div>
</template>
