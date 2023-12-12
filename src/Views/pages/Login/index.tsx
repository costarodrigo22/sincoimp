import { useTheme } from "../../../theme/useTheme";
import { Container } from "./styles";
import { InputLogin } from "../../../global/layouts/BaseInput";

import logo from "../../../assets/Icons/logo.svg";
import user from "../../../assets/Icons/user_icon.svg";
import password from "../../../assets/Icons/password_icon.svg";
import { Button } from "../../../global/layouts/BaseButton";
import useLoginController from "./useLoginController";

export function Login() {
  const theme = useTheme();

  const { handleSubmit, register, errors, isPending } = useLoginController();

  return (
    <Container>
      <div
        className="infos"
        style={{ background: `${theme.colors.login.primary.lighter}` }}
      >
        <div className="head">
          <span style={{ marginBottom: 20 }}>Olá, seja bem-vindo!</span>

          <span>
            Acesse a área do seu perfil para consultar seus benefícios.
          </span>
        </div>

        <div className="foot">
          <span style={{ fontWeight: 600 }}>
            Ainda não se filiou ao Sincoimp?
          </span>
          <span style={{ fontWeight: 200 }}>
            Filie -se e tenha diversos benefícios.
          </span>
        </div>
      </div>

      <div className="content">
        <div className="container-inputs">
          <img src={logo} />
          <span>Acessar perfil</span>
          <div className="input-action">
            <InputLogin.Wrapper
              placeholder="Usuário"
              onKeyDown={(event) => event.key === "Enter" && handleSubmit()}
              error={errors.user?.message}
              {...register("user")}
            >
              <InputLogin.Icon icon={user} />
              <InputLogin.Separator />
            </InputLogin.Wrapper>

            <InputLogin.Wrapper
              placeholder="Senha"
              margin_top={20}
              error={errors.password?.message}
              onKeyDown={(event) => event.key === "Enter" && handleSubmit()}
              type="password"
              {...register("password")}
            >
              <InputLogin.Icon icon={password} />
              <InputLogin.Separator />
            </InputLogin.Wrapper>
          </div>
          <div className="container-forgot-password">
            <span
              style={{
                color: `${theme.colors.login.primary.lighter}`,
                fontSize: 15,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Esqueci minha senha
            </span>
          </div>

          <Button.Wrapper
            label="Acessar"
            margin_top={20}
            border_radius={20}
            isLoading={isPending}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </Container>
  );
}
